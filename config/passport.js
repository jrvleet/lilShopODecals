var PaypalStrategy = require('passport-paypal').Strategy;
var User = require('../models/user');





module.exports = function(passport) {

	passport.use(new PaypalStrategy({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		returnURL: 'http://localhost:3000/callback',
		realm: 'http://localhost:3000'
	}, function(token, profile, done) {
		console.log(profile);
	}))

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
     done(err, user);
    });
  });
}
