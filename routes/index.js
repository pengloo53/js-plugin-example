module.exports = function (app) {
    app.use(function (req, res, next) {
        res.locals.web = {
            title: 'JS 插件在线演示',
            authod_twitter: 'https://twitter.com/pengloo53',
            authod_weibo: 'https://weibo.com/pengloo53'
        };
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





