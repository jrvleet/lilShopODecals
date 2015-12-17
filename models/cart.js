var mongoose = require('mongoose'),
	debug    = require('debug')('app:models');

var cartSchema = new mongoose.Schema({
	user: String,
	product: String,
	quantity: Number
});

var Cart  = mongoose.model('Cart', cartSchema);

module.exports = Cart;