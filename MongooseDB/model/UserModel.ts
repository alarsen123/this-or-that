import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IUserModel} from '../interfaces/IUserModel';
import {STATUS_CODES} from "http";
import * as crypto from 'crypto';
import { ItemModel } from "./ItemModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
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
                user_id: {type: String, required: true, unique: true},
                username: String,
                age: Number,
                email: String,
                phone: String,
                user_items : [ {
                    item_id: Number,
                }],
            }, {collection: 'users'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("users", this.schema);
    }      
    
    public createUser(response:any, userObject: IUserModel){
        this.model.insertMany(userObject)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err) });
    }

    public getUser(response:any, filter:Object) {
        console.log(filter);
        this.model.findOne(filter)
            .then((result) => {response.json(result);})
            .catch((err) => {response.json(err);});
    }

    public updateUser(response:any, userObject:IUserModel){
        this.model.replaceOne({user_id: userObject["user_id"]}, userObject)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err); });
    }

    public deleteUser(response:any, userObject:IUserModel){
        this.model.deleteOne(userObject)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err) });
    }

    public updateUserAfterVote(response:any, ids:Object){
        this.model.findOneAndUpdate({"user_id": ids[1]}, {$push: {user_items: ids[0]}},{new: true},
        function(err, itemArray) { 
            response.json(itemArray)
        });
    }

}
export {UserModel};
