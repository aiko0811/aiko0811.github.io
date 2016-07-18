var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});

app.get('/lemon', function (req, res) {
	var responseText = "";

	responseText += "What the lemon taste like? Lemon is sour...oh my god.";
	responseText += "<img src='https://www.organicfacts.net/wp-content/uploads/2013/05/Lemon3.jpg'>"
    
    res.send(responseText);

    console.log('I just told them how sour the lemon is.')
});

app.get('/sugar', function (req, res) {
    var responseText ="";

    responseText += "What the candy taste like? The candy is sweet!"

  res.send(responseText);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});