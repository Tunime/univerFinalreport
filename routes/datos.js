var express = require('express');
var router = express.Router();
var datou = require('../main.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //var resultsObj = JSON.parse(next);
  console.log("entro");
  res.writeHead(200,{'Content-Type':'application/json'});
  var myObj={
    name: "hola",
    ip: "no"
  };
  res.end(JSON.stringify(datou));
  //console.log(resultsObj.MRData)
});

module.exports = router;
