// necessities --> requirements
var express         = require('express'),
    // mongoose        = require('mongoose'),
    bodyParser     = require('body-parser'),
    // methodOverride  = require('method-override'),
    // passport        = require('passport'),
    // session         = require('express-session'),
    app             = express(),
    // routesController  = require('./controller/routes.js'),
    // User            = require('./models/user.js'),
    // Board           = require('./models/board.js'),
    port            = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var routesController = require('./router.js')
app.use('/users', routesController);

app.get('/', function(req, res){
	 res.json({ message: 'hooray! welcome to our api!' });
});
// connecting to the server..listening for request & response
app.listen(port,function(){
  console.log('==========================');
  console.log('Running on port = '+port);
  console.log('==========================');
  console.log(' ');
});