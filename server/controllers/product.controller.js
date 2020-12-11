const Product = require("../models/product.model");


module.exports.findAll = (req,res) =>{
    Product.find({})
    .then(products => res.json(products) )
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.addProduct = (req,res) =>{
    console.log(req.body) ;
    // const {title, price, desc} = req.body ;
    // console.log(Product);
    Product.create(req.body)
    .then(product => res.json({newProduct:product}))
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.oneProduct = (req,res) =>{
    console.log(req.params._id);
    Product.findOne({_id:req.params._id})
    .then(product => res.json({product}))
    .catch(err => res.json({message: 'somthing wrong', error: err}));
};

module.exports.updateProduct = (req,res) =>{
    console.log(req.params._id);
    Product.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
    .then(() => res.json({msg: "ok"}))
            .catch(err => res.json(err));
};

module.exports.remove= (req, res) => {
    console.log(req.params._id);
    Product.deleteOne({_id: req.params._id})
        .then(() => res.json({msg: "ok"}))
        .catch(err => res.json(err));
};

