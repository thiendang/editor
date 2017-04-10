var express = require('express')
	,bodyParser = require('body-parser')
	,path = require('path');

// Init app
var app = express();
var parser = bodyParser.urlencoded({extended: false})
//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', function (req, res) {
	// body...
	res.render('basic')
});

app.get('/', function (req, res) {
	// body...
	res.render('index')
});

app.get('/product-contact', function (req, res) {
	// body...
	res.render('product-contact')
});

app.get('/product-shirts', function (req, res) {
	// body...
	res.render('product-shirts')
});
app.get('/product-hats', function (req, res) {
	// body...
	res.render('product-hats')
});
app.get('/product-bags', function (req, res) {
	// body...
	res.render('product-bags')
});
app.get('/product-socks', function (req, res) {
	// body...
	res.render('product-socks')
});
app.get('/product-calendar', function (req, res) {
	// body...
	res.render('product-calendar')
});
app.get('/product-mugs', function (req, res) {
	// body...
	res.render('product-mugs')
});
app.get('/product-pillows', function (req, res) {
	// body...
	res.render('product-pillows')
});
app.get('/product-phone', function (req, res) {
	// body...
	res.render('product-phone-case')
});

app.get('/testmail', function (req, res) {
	res.render('form');
})
app.post('/testmail', parser, function (req, res) {
	var id = req.body.id;
	var images = req.file.filename;
})

app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

// SET PORT
app.set('port', (process.env.PORT || 9000));

app.listen(app.get('port'), function () {
	// body...
	console.log('Server started on port ' + app.get('port'));
});
