var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
res.send('im at the router');
});


module.exports = router;