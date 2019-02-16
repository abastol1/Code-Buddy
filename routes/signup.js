var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log((req.body));
  console.log(req.body.username);
  console.log(req.body.languageList);
  for (var a of  req.body.languageList){
    console.log(a);
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
