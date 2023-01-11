import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dishesSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String 
    },
    allergies: {
        type: String
    },
    restaurant: {
        type: mongoose.Schema.ObjectId,
        ref: 'Restaurants'
    },
    categories: {
        type: mongoose.Schema.ObjectId,
        ref: 'Categories'
    },
    photo: {
        type: String
    },

},
{ versionKey: false }
);

const Dishes = mongoose.model('Dishes', dishesSchema);
export default Dishes;