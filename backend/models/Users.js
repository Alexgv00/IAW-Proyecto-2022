import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    nickname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "undefined.png"
    },
    role: {
        type: String,
        default:"USER"
    }
}, {
    versionKey: false
});

const Users = mongoose.model('Users', usersSchema);
export default Users;