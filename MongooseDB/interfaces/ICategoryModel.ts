import Mongoose = require("mongoose");

interface ICategoryModel extends Mongoose.Document {
    category_id : number;
    items : [ {
        item_id: number;
    }];
}
export {ICategoryModel};