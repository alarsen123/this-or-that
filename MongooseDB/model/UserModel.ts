import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IUserModel} from '../interfaces/IUserModel';
import {STATUS_CODES} from "http";
import * as crypto from 'crypto';

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
                user_id: String,
                username: {type: String, required: true, unique: true},
                hashed_pwd: String,
                age: Number,
                email: String,
                phone: String
            }, {collection: 'users'}
        );
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("users", this.schema);
    }

    public hashPW(pwd) {
        return crypto.createHash('sha256').update(pwd).digest('base64').toString();
    }

    public login(req, res) {
        this.model.findOne({username: req.body.username}).exec( function(err, user) {
            if (!user) {
                err = 'User Not Found';
            } 
            else if (user.hashed_pwd === hashPW(req.body.password.toString())) {
                req.session.user = user.id;
                req.session.username = user.username;
            } 
            else {
                err = 'Authentication failed';
            }
            if (err) {
                req.session.regenerate( function () {
                    res.redirect('/login');
                })
            }
        } );
    }        
    
    public createUser(response:any, userObject: IUserModel){
        this.model.insertMany(userObject)
            .then((result) => { response.json(result); })
            .catch((err) => { response.json(err) });
    }

    public getUser(response:any, filter:Object) {
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
}
export {UserModel};

function hashPW(pwd) {
    return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}
