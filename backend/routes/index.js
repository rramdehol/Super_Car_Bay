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
// Create password
var bcrypt = require('bcrypt-nodejs');
// Hash it
var hashedPassword = bcrypt.hashSync("x");
console.log(hashedPassword);
// Check it
var checkHash = bcrypt.compareSync("x", hashedPassword);
console.log(checkHash);

/* GET home page. */
router.get('/getHomeAuctions', function(req, res, next) {
	var auctionsQuery = 'SELECT * FROM auctions limit 10'
	connection.query(auctionsQuery, (error, results, fields)=>{
		if(error) throw error;
		res.json(results)
	})
  // res.render('index', { title: 'Express' });
});

// Make a register post route to handle registration
router.post('/register', (req,res,next)=>{
	checkDupeUserQuery = "SELECT * FROM users WHERE username = ?";
	connection.query(checkDupeUserQuery, [req.body.username],(error, results, fields)=>{
		// console.log("$$$$$$$")
		// console.log(results);
		// console.log("$$$$$$$")
		if(results.length ===0){
			var insertQuery = "INSERT INTO users (usename, pasword) VALUES"+"(?,?)"
			connection.query(insertQuery, [req.body.username, bcrypt.hasSync(req.body.password)])
			res.json(req.body)
		}else{
			res.json({
				msg:"UserNameTaken"
			})
		}
	})
	res.json(req.body)
})

router.post('/login', (req,res,next)=>{
	var username = req.body.username;
	var password = req.body.password;
})
module.exports = router;
