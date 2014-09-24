var express = require('express');
var router = express.Router();

router.get(/\/(\d+)/, function(req, res) {
  res.render('example' + req.params[0]);
});

module.exports = router;
