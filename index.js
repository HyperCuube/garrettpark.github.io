const express = require('express');
const socket = require('socket.io');
var path = require('path');

//FrontEnd
const site = express();

site.get('/', (req, res) => {
  res.sendFile('./ServerSide.html', {root: __dirname })
});

site.listen(8080, () => {
  console.log('HTML Started');
});

//The Rest
const app = express();

app.get('/', (req, res) => {
  res.sendFile('./PROTECTED/Protected-Hub.html', {root: __dirname })
});

app.listen(4500, () => {
  console.log('Protected Started');
});