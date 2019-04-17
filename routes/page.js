/**
 *  前台页面路由
 */

var express = require("express");
var router = express.Router();

// page 首页
router.get('/', function(req, res, next){
    res.render('page', {
        url: '',
        title: '目录',
        official_link: '/',
        doc_link: 'https://www.yuque.com/pengloo53/web'
    });
});

/**
 *  jQuery
 */

// bootstrap-table
router.get("/bootstrap-table", function(req, res, next) {
    res.render("jquery/bootstrap-table", {
        url: "jquery",
        title: "bootstrap-table",
        official_link: "https://bootstrap-table.com/",
        doc_link: "https://www.yuque.com/pengloo53/web/bootstrap-table"
    });
});

// datatables
router.get("/datatables", function (req, res, next) {
    res.render("jquery/datatables", {
        url: "jquery",
        title: "datatables",
        official_link: "https://datatables.net/",
        doc_link: "https://www.yuque.com/pengloo53/web/datatables"
    });
});

// jquery-tabledit
router.get("/jquery-tabledit", function (req, res, next) {
    res.render("jquery/jquery-tabledit", {
        url: "jquery",
        title: "jquery-tabledit",
        official_link: "http://markcell.github.io/jquery-tabledit/",
        doc_link: "https://www.yuque.com/pengloo53/web/jquery-tabledit",
        dataList: [
            {
                id: 1,
                plant: "公司A",
                place: "北京",
                owner: "李丹",
                preparation: 20,
                bz: "lajf;alnalk;djfajfl;jjaj;sldkj"
            },
            {
                id: 2,
                plant: "公司B",
                place: "武汉",
                owner: "里斯本",
                preparation: 12,
                bz: "拉开始计丹房；拉开就是短发；辣椒粉阿拉斯加快递费"
            },
            {
                id: 3,
                plant: "公司C",
                place: "北京",
                owner: "瓦克",
                preparation: 17,
                bz: "阿里；快速的减肥"
            },
            {
                id: 4,
                plant: "公司D",
                place: "成都",
                owner: "佳丽",
                preparation: 18,
                bz: "拉开的减肥了"
            },
            {
                id: 5,
                plant: "公司E",
                place: "合肥",
                owner: "元俊",
                preparation: 19,
                bz: "频率；可能"
            },
            {
                id: 6,
                plant: "公司F",
                place: "北京",
                owner: "松江",
                preparation: 20,
                bz: "离开家啊点"
            },
            {
                id: 7,
                plant: "公司G",
                place: "合肥",
                owner: "原哈",
                preparation: 21,
                bz: "欧豪屁啊就"
            },
            {
                id: 8,
                plant: "公司H",
                place: "台湾",
                owner: "王继",
                preparation: 22,
                bz: "破 iu 阿道夫"
            }
        ]
    });
});


// bootstrap-datepicker
router.get("/bootstrap-datepicker", function (req, res, next) {
    res.render("jquery/bootstrap-datepicker", {
        url: "jquery",
        title: "bootstrap-datepicker",
        official_link: "https://bootstrap-datepicker.readthedocs.io/en/latest/",
        doc_link: "https://www.yuque.com/pengloo53/web/bootstrap-datepicker"
    });
});

// daterangepicker
router.get("/daterangepicker", function (req, res, next) {
    res.render("jquery/daterangepicker", {
        url: "jquery",
        title: "daterangepicker",
        official_link: "http://www.daterangepicker.com/#example2",
        doc_link: "https://www.yuque.com/pengloo53/web/daterangepicker"
    });
});

// jquery-validation
router.get("/jquery-validation", function(req, res, next) {
    res.render("jquery/jquery-validation.ejs", {
        url: "jquery",
        title: "jquery-validation",
        official_link: "https://jqueryvalidation.org/",
        doc_link: "https://www.yuque.com/pengloo53/web/jquery-validation"
    });
});
// bootstrap3-typeahead
router.get('/bootstrap3-typeahead', function(req, res, next){
    res.render("jquery/bootstrap3-typeahead", {
        url: "jquery",
        title: "bootstrap3-typeahead",
        official_link: "https://github.com/bassjobsen/Bootstrap-3-Typeahead",
        doc_link: "https://www.yuque.com/pengloo53/web/bootstrap3-typeahead"
    });
});
// bootstrap-fileinput
router.get('/bootstrap-fileinput', function (req, res, next) {
    res.render("jquery/bootstrap-fileinput", {
        url: "jquery",
        title: "bootstrap-fileinput",
        official_link: "http://plugins.krajee.com/file-input",
        doc_link: "https://www.yuque.com/pengloo53/web/bootstrap-fileinput"
    });
});
// x-editable
router.get('/x-editable', function (req, res, next) {
    res.render("jquery/x-editable", {
        url: "jquery",
        title: "x-editable",
        official_link: "http://vitalets.github.io/x-editable/index.html",
        doc_link: "https://www.yuque.com/pengloo53/web/x-editable"
    });
});

/**
 *  原生
 */

// sweetalert2
router.get('/sweetalert2', function(req, res, next){
    res.render('original/sweetalert2', {
        url: 'original',
        title: 'sweetalert2',
        official_link: 'http://www.htmleaf.com/Demo/201606123590.html',
        doc_link: 'https://www.yuque.com/pengloo53/web/sweetalert2'
    });
});

router.get('/js-md5', function(req, res, next){
    res.render('original/js-md5', {
        url: 'original',
        title: 'js-md5',
        official_link: '',
        doc_link: 'https://www.yuque.com/pengloo53/web/js-md5'
    });
});

router.get('/moment', function(req, res, next){
    res.render('original/moment', {
        url: 'original',
        title: 'moment',
        official_link: '',
        doc_link: 'https://www.yuque.com/pengloo53/web/moment'
    });
});
router.get('/echarts', function(req, res, next){
    res.render('original/echarts', {
        url: 'original',
        title: 'echarts',
        official_link: '',
        doc_link: 'https://www.yuque.com/pengloo53/web/echarts'
    });
});
module.exports = router;
