import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IItemModel} from '../interfaces/IItemModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ItemModel {
    public schema:any;
    public innerSchema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                item_id: Number,
                category_id: Number,
                item_name: String,
                item_number_of_votes: Number,
                item_percent_of_votes: Number,
                item_rank: Number,
            }, {collection: 'items'}
        );
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IItemModel>("items", this.schema);
    }
    
    public retrieveAllItemsfromUniqueCategory(response:any, filter:Object){
        var query = this.model.find(filter);
        query.exec((err,itemArray)=>{
            response.json(itemArray)
        });
    }

      
    public retrieveAllItems(response:any){
        var query = this.model.find({});
        query.exec((err,itemArray)=>{
            response.json(itemArray)
        });
    }

    public retrieveOneItem(response:any, filter:Object){
        var query = this.model.findOne(filter);
        query.exec((err,itemArray) =>{
            response.json(itemArray)
        });
    }
}
export {ItemModel};