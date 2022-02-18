let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let text ="текст";
  res.render('index', { title: 'Express', text });
});

router.get('/news', function(req, res, next) {
  let text ="news";
  res.render('index', { title: 'news', text });
});

router.get('/form', function(req, res, next) {
  console.log(req.body)
  res.render('form', { title: 'form'});
});

router.post('/form', function(req, res, next) {
  console.log(req.body)
});

module.exports = router;
