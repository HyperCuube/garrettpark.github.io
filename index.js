const express = require('express');
var path = require('path');

//FrontEnd
const site = express();

site.get('/', (req, res) => {
  res.sendFile('./ServerSide.html', {root: __dirname })
});

site.listen(8080, () => {
  console.log('HTML Started');
});