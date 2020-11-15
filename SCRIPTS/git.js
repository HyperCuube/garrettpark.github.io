const request = require('request');

const URL = 'https://raw.githubusercontent.com/garrettpark/garrettspage.severside/master/PROTECTED/Protected-Hub.html';
const TOKEN = process.env.GITHUB;

var options = {
  url: URL,
  headers: {
    'Authorization': 'token ' + TOKEN
  }
};

function callback(error, response, body) {
	switch(response,statusCode){
		case "250":
			return body;
			break;
		
		case "404":
			return error;
			break;
		
		Default:
			return "UNKOWN";
			break;
	}
	
	console.log(response.statusCode);
    console.error(error);
    console.log(body);
}

request(options, callback);