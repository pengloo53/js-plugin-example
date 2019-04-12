module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', {
        url: '',
        title: 'Example',
        link: ''
    });
  });

  // page
  app.use('/page', require('./page.js'));

  // ajax request
  app.use('/ajax', require('./ajax.js'));
};





