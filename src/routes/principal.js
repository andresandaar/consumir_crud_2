const express = require('express'); //retorna un objeto
const router = express.Router();
router.get('/', function (req, res) {
	res.render('home.ejs');
	//res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/consulta', function (req, res) {
	res.render('consulta.ejs');
	//res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/registro', function (req, res) {
	res.render('registro.ejs');
});

module.exports = router;
//https://dev.to/sandeepkumardev/fix-the-cors-and-how-the-access-control-allow-origin-header-works-17el
