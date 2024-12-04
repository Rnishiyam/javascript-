var express = require('express');
 var router = express. Router();
/* GET home page. */
router.get('/', function(req, res, next) {
     │_res.render('hello', { title: 'Hello Express' });
});
module.exports = router;