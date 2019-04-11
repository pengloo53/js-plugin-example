module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', {
        url: '',
        title: 'Example',
        link: ''
    });
  });

  // table
  app.use('/bootstrap-table', require('./table/bootstrap-table.js'));
  app.use('/datatables', require('./table/datatables.js'));

  // jquery
  app.use('/jquery-tabledit', require('./jquery/jquery-tabledit.js'));
  app.use('/jquery-validation', require('./jquery/jquery-validation.js'));

  // bootstrap
  app.use('/bootstrap-datepicker', require('./bootstrap/bootstrap-datepicker.js'));
  app.use('/bootstrap-daterangepicker', require('./bootstrap/bootstrap-daterangepicker.js'));
};





