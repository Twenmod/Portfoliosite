var express = require('express');
var router = express.Router();
const path = require('path');

router.use(express.static('public'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
  res.sendFile(path.join(__dirname, '../public/images/Golfrush.png'));
});

module.exports = router;
