const express = require('express'); //retorna un obejto
const router = express.Router();
router.get('/', function (req, res) {
	res.render('home.ejs');
	//res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/respregistro', function (req, res) {
	res.render('respregistro.ejs');
	//res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/resconsulta', function (req, res) {
	res.render('resconsulta.ejs');
	//res.sendFile(path.join(__dirname, '../views/index.html'));
});
module.exports = router;
//https://dev.to/sandeepkumardev/fix-the-cors-and-how-the-access-control-allow-origin-header-works-17el
