// var express = require('express');
// console.log('test');
//
// // Create our app
// var app = express();
//
// app.use(express.static('public'));
//
// app.listen(8000, function () {
//   console.log('Express server is up on port 8000');
// });




var express = require('express')
var app = express()

app.use(express.static('public'));

app.listen(8000, function () {
	console.log('Example app listening on port 8000!')
})