var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('jquery/jquery-validation.ejs', {
        url: 'jquery',
        title: 'jquery-validation',
        link: 'https://jqueryvalidation.org/'
    });
});

module.exports = router;