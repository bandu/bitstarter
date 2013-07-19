var express = require('express');

var app = express.createServer(express.logger());

var startingfile = new Buffer(fs.readFileSync('index.html','utf8'),"utf-8");


app.get('/', function(request, response) {
//  response.send(fs.readFileSync("./index.html").toString());

	response.send("Text works!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
