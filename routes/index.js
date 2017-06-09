var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'hy' });
  res.render('index', { title: 'wellcome', lists: ['博客','关于我'] })
});

module.exports = router;
