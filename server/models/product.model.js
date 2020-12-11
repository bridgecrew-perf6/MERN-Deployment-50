
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title :{
        type: String,
        required:[true,'title required'],
        minLength:[3,'title must be at leat 3 chracters']
    },

    price :{
        type: Number,
        required:[true,'price required'],
        min:[10,'price must be above 10$']
    },

    description :{
        type: String,
        required:[true,'description required'],
        minLength:[10,'description must be at leat 10 chracters']
    }

} ,{timestamps: true});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;