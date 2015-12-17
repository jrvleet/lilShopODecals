var mongoose = require('mongoose'),
	debug    = require('debug')('app:models');

var productSchema = new mongoose.Schema({
	productName: String,
	quantity: Number,
	color: String,
	price: Number
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;