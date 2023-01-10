import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
        required: true
    },
    description: {
        type: String,
    },
    restaurant: {
        type: mongoose.Schema.ObjectId,
        ref: 'Restaurants',
        required: true
    },
    stars: {
        type: Number,
    }
},
{ versionKey: false }
);

const Comments = mongoose.model('Comments', commentsSchema);
export default Comments;