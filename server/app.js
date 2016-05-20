var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('client/'));
app.use(express.static('bower_components/'));

app.get('/api',function(req,res){
	res.send({"data" : "Working"});
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + './../client/index.html'));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
