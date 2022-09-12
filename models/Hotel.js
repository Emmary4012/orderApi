import mongoose from 'mongoose';
const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    phot: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    de: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        //required: true,
        min:0,
        max:5
    },
    rooms: {
         type: [String],
       
    },
    cheapestPrice: {
        type: Number, 
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Hotel", HotelSchema)