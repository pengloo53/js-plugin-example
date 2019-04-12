module.exports = function (app) {
    app.get(function (req, res, next) {
        res.locals.web = 'JS 插件在线演示';
        next();
    });

    // index
    app.get('/', function (req, res, next) {
        res.render('index', {
            title: 'JS 插件在线演示'
        });
    });

    // page
    app.use('/page', require('./page.js'));

    // ajax request
    app.use('/ajax', require('./ajax.js'));
};





