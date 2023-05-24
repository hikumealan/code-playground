/* eslint-disable */

var express = require('express');
var app = express();
var path = require('path');
const packageJson = require('../package.json');
const lastRelease = packageJson.version;
const staticPath = path.join(__dirname, '../.playbook');
//setting middleware
app.use(express.static(staticPath)); //Serves resources from public folder

app.get('*', (req, res) => {
  // to check whether this default redirect can be done in pipeline
  res.redirect('http://localhost:5000/js/'+ lastRelease +'/');
});

var server = app.listen(5000, () => {
  console.log('staticPath', staticPath);
  console.log('Listening on port 5000');
});
