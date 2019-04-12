/**
 *  前台页面路由
 */

var express = require("express");
var router = express.Router();

/**
 *  Table
 */
// bootstrap-table
router.get("/bootstrap-table", function(req, res, next) {
    res.render("table/bootstrap-table", {
        url: "table",
        title: "bootstrap-table",
        link: "https://bootstrap-table.com/"
    });
});

// datatables
router.get("/datatables", function(req, res, next) {
    res.render("table/datatables", {
        url: "table",
        title: "datatables",
        link: "https://datatables.net/"
    });
});

// jquery-tabledit
router.get("/jquery-tabledit", function(req, res, next) {
    res.render("table/jquery-tabledit", {
        url: "table",
        title: "jquery-tabledit",
        link: "http://markcell.github.io/jquery-tabledit/",
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


/**
 *  jQuery
 */
// jquery-validation
router.get("/jquery-validation", function(req, res, next) {
    res.render("jquery/jquery-validation.ejs", {
        url: "jquery",
        title: "jquery-validation",
        link: "https://jqueryvalidation.org/"
    });
});


/**
 *  Date
 */
// bootstrap-datepicker
router.get("/bootstrap-datepicker", function(req, res, next) {
    res.render("date/bootstrap-datepicker", {
        url: "date",
        title: "bootstrap-datepicker",
        link: "https://bootstrap-datepicker.readthedocs.io/en/latest/"
    });
});

// daterangepicker
router.get("/daterangepicker", function(req, res, next) {
    res.render("date/daterangepicker", {
        url: "date",
        title: "daterangepicker",
        link: "http://www.daterangepicker.com/#example2"
    });
});

module.exports = router;
