var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'hy' });
  res.render('index', { title: 'wellcome', lists: [{ name: '博客', url:'https://saihy2016.github.io/' }, { name: '关于我',url:'' }, { name: '关于她',url:'' }] })
});

module.exports = router;
