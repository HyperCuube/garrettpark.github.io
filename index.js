const express = require('express');
const app = express();
const socket = require('socket.io');
var path = require('path');

app.get('/', (req, res) => {
  res.sendFile('./ServerSide.html', {root: __dirname })
});

app.listen(8080, () => {
  console.log('server started');
});