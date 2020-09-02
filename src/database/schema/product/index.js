const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    price: {type: String, required: true},
    code: {type: String, required: true, unique: true},
    amount: {type: Number, required: true},
    description: {type: String}
    
})

const Product = mongoose.model('products', ProductSchema)

module.exports = Product