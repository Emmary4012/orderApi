import mongoose from 'mongoose';
const ProductSchema = mongoose.Schema({
    productname: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
    },
    subcategory: {
        type: String,
    },
    type: {
        type: String,
    },
    brand: {
        type: String,
    },
    source: {
        type: String
    },
    sourceEmail: {
        type: String
    },
    sourcePhone: {
        type: String
    },
    img: {
        type: String,
    },
    price: {
        type: Number, 
        required: true,
    },
    rating: {
        type: Number,
        min:0,
        max:5
    },
    description: {
        type: String
    }
},{timestamps: true});

export default mongoose.model("Product", ProductSchema)