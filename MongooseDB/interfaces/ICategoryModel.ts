import Mongoose = require("mongoose");

interface ICategoryModel extends Mongoose.Document {
    category_id : number;
    category_name: String;
    items : [ {
        item_id: number;
    }];
}
export {ICategoryModel};