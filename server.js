const express = require('express'),
	socket = require('socket.io'),
	mysql = require('mysql'),
	cookieParser = require('cookie-parser'),
	session = require('express-session');
var app = express();
  
app.get('/', express.static('./PUBLIC'));

var server = app.listen(8443, function () {
	console.log("Started Listening");
});
var io = socket(server);

var sessionMiddleware = session({
  secret: process.env.SIO_Secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
});

io.use(function (socket, next) {
  sessionMiddleware(socket.request, socket.request.res, next);
});
app.use(sessionMiddleware);
app.use(cookieParser());

const config = {
  "host": process.env.SQL_Host,
  "user": process.env.SQL_User,
  "password": process.env.SQL_Pass,
  "base": process.env.SQL_Base
};

var db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.base
});

db.connect(function (error) {
  if (!!error)
  throw error;

  console.log('MySQL Connected');
});

io.on('connection', function (socket) {
	var req = socket.request;
	socket.on("login_register", function(data){
	const user = data.user,
	pass = data.pass;
	db.query("SELECT * FROM users WHERE Username=?", [user], function(err, rows, fields){
		if(rows.length == 0){
			db.query("INSERT INTO users(`Username`, `Password`) VALUES(?, ?)", [user, pass], function(err, result){
			if(!!err)
				throw err;

			console.log(result);
			socket.emit("logged_in", {user: user});
		});
		}else{
			console.log("here");
		}
	});
});
});