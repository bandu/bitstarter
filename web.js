var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('index.html');//reads index.html content to buffer

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
