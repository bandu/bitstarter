var express = require('express');

var app = express.createServer(express.logger());

var startingfile = new Buffer(fs.readFileSync('index.html','utf8'),"utf-8");


app.get('/', function(request, response) {
<<<<<<< HEAD
//  response.send(fs.readFileSync("./index.html").toString());

	response.send('Text works!');
=======
  //response.send(fs.readFileSync("./index.html").toString());
  response.send("Test");
>>>>>>> eaad9ad233adbc9063d55492f29e9bf616395474
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
