// jshint esversion:6
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


//carousel part start


//carousel part end


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
