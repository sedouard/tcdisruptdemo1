var express = require('express');
var router = express.Router();

//add middleware to be ran before any call serviced by demoApi router
router.use(function(req, res, next){
    
    console.log('hit!');
    if(!req.query.api_key){
        return res.send({message: 'must specify api_key'});
    }
    
    next();
    
});

/* GET home page. */
router.use(function(req, res) {
  res.send({message:'created api in 3 mintes'});
});

module.exports = router;
