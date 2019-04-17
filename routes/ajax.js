/**
 *  前台 ajax 请求处理
 */

var express = require("express");
var router = express.Router();

// 表格示例数据
var data = [
    {
        id: 0,
        name: "Item 0",
        price: "$0",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 1,
        name: "Item 1",
        price: "$1",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 2,
        name: "Item 2",
        price: "$2",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 3,
        name: "Item 3",
        price: "$3",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 4,
        name: "Item 4",
        price: "$4",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 5,
        name: "Item 5",
        price: "$5",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 6,
        name: "Item 6",
        price: "$6",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 7,
        name: "Item 7",
        price: "$7",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 8,
        name: "Item 8",
        price: "$8",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 9,
        name: "Item 9",
        price: "$9",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 10,
        name: "Item 10",
        price: "$10",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 11,
        name: "Item 11",
        price: "$11",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 12,
        name: "Item 12",
        price: "$12",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 13,
        name: "Item 13",
        price: "$13",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 14,
        name: "Item 14",
        price: "$14",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 15,
        name: "Item 15",
        price: "$15",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 16,
        name: "Item 16",
        price: "$16",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 17,
        name: "Item 17",
        price: "$17",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 18,
        name: "Item 18",
        price: "$18",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 19,
        name: "Item 19",
        price: "$19",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    },
    {
        id: 20,
        name: "Item 20",
        price: "$20",
        column1: "C 10",
        column2: "C 20",
        column3: "C 30",
        column4: "C 40"
    }
];

// tabledit ajax operator
router.post("/tabledit", function(req, res, next) {
    var action = req.body.action;
    var id = req.body.table_id;
    if (action == "delete") {
        console.log("--------- you need do something to delete your data");
        res.send(JSON.stringify({ message: "delete ok" }));
    } else if (action == "edit") {
        console.log("--------- you need do something to update your data");
        res.send(JSON.stringify({ message: "edit ok" }));
    } else if (action == "restore") {
        console.log("--------- you need do something to restore your data");
        res.send(JSON.stringify({ message: "restore ok" }));
    }
});

// bootstrap-table data
router.get("/bootstrap-table/data", function(req, res, next) {
    res.send(data);
});
// x-editable edit
router.post('/bootstrap-table/edit', function(req,res,next){
    res.send('success');
  });

// datatables data
router.get("/datatables/data", function(req, res, next) {
    res.send(data);
});

// bootstrap3-typeahead
router.get('/bootstrap3-typeahead/data', function(req, res, next){
    res.send(data);
});

// x-editable
router.post('/x-editable/post', function(req, res, next){
    res.send({message: 'OK'});
});
// x-editable remote data
router.get('/x-editable/remote-data', function(req, res, next){
    res.send([
        { value: '', text: '请选择' },
        { value: 'beijing', text: '北京' },
        { value: 'shagnhai', text: '上海' },
        { value: 'zhuangdong', text: '广东' }
    ]);
});

module.exports = router;
