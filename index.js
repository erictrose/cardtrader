var express = require('express');
var app = express();

//set directories
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//serve the index
app.get('/', function(request, response) {
  response.render('pages/index');
});

//port and listen
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});