var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config.js')
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})
connection.connect();
/* GET home page. */
router.get('/getHomeAuctions', function(req, res, next) {
	var auctionsQuery = 'SELECT * FROM auctions'+
	'INNER JOIN images ON images.auction_id = auctions.id'
	+'limit 10';
	connection.query(auctionsQuery, (error, results, fields)=>{
		if(error) throw error;
		res.json(results)
	})
  // res.render('index', { title: 'Express' });
});

module.exports = router;
