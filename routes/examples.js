var express = require('express');
var router = express.Router();

router.get('/1', function(req, res) {
  res.render('example1');
});

module.exports = router;
