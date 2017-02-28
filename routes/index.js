var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/eval', (req, res, next) => {
  var expression = req.body.doeval;
  var result = eval(expression);
  console.log(result);

  res.render('index',{result:result})
});


module.exports = router;
