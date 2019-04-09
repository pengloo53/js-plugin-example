var express = require('express');
var router = express.Router();

// bootstrap-table
router.get('/', function(req, res, next){
  res.render('table/bootstrap-table', {
    url: 'table',
    title: 'bootstrap-table',
    link: 'https://bootstrap-table.com/'
  });
});
// X-editable data
router.post('/edit', function(req,res,next){
  res.send('success');
});

module.exports = router;