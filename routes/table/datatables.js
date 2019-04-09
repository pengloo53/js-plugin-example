var express = require('express');
var router = express.Router();

// datatables
router.get('/', function(req, res, next){
  res.render('table/datatables', {
      url: 'table',
      title: 'datatables',
      link: 'https://datatables.net/'
  });
});
router.get('/data', function(req,res,next){
  res.send();
});

module.exports = router;