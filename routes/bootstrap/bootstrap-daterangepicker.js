var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('bootstrap/bootstrap-datepicker', {
        url: 'bootstrap',
        title: 'bootstrap-daterangepicker',
        link: ''
    });
});

module.exports = router;