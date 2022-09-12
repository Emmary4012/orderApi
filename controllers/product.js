import Product from "../models/Product.js";
import { createError } from "../Utils/error.js";


export const createProduct = async (req,res,next)=> {
    const newProduct = Product(req.body);
    console.log("pdt")
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        createError(403, "Sorry, product creation failed. Pleease try again"); 
    }
}


export const updateProduct = async (req,res)=>{

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedProduct);
    } catch (err) {
        createError(403, "Sorry, product update was unsuccessful. Pleease try again"); 
    }
   
}

export const deleteProduct = async (req,res)=>{

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been successfully deleted");
    } catch (err) {
        createError(403, "Sorry, product removal failed. Pleease try again");
    }
   
}

export const getProduct = async (req,res,next)=>{

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        createError(403, "Sorry, couldn't fetch the product. Pleease try again");  
    }
   
}

export const getProducts = async (req,res,next)=>{
    const {min, max, ...others} = req.query; 
    try {
        const products = await Product.find({...others, cheapestPrice: {$gt:min|1,$lt:max||999}}).limit(req.query.limit);
        res.status(200).json(products);
    } catch (err) {
        createError(403, "Sorry, couldn't fetch the products. Pleease try again"); 
    }
   
}
