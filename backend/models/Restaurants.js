import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name: {
        type: String,
        required: true, 
        unique: true
    }, 
    description: {
        type: String
    },  
    price:{
        type: Number,
        required: true
    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    stars:{
        type: Number,
        required: true
    },
    comments:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Comments'
    }],
    direction: {
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    dishes: [{
        type: mongoose.Schema.ObjectId,
        ref:'Dishes'
    }]
}, 
{ versionKey: false }
);

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
export default Restaurants;