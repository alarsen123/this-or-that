import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    user_id: {type: String, required: true, unique: true},
    username: String,
    age: Number,
    email: String,
    phone: String,
    user_items : [ {
        item_id: Number,
    }],
}
export {IUserModel};
