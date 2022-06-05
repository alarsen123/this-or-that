import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    username: {type: String, required: true, unique: true},
    email: String,
    hashed_pwd: String,
    Id: String,
}
export {IUserModel};
