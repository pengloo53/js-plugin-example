module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', {
        url: '',
        title: '文档库',
        link: 'https://www.yuque.com/pengloo53/web'
    });
  });

  // page
  app.use('/page', require('./page.js'));

  // ajax request
  app.use('/ajax', require('./ajax.js'));
};





