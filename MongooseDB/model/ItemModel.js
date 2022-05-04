"use strict";
exports.__esModule = true;
exports.ItemModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ItemModel = /** @class */ (function () {
    function ItemModel() {
        this.createSchema();
        this.createModel();
    }
    ItemModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            item_id: Number,
            category_id: Number,
            item_name: String,
            item_number_of_votes: Number,
            item_percent_of_votes: Number,
            item_rank: Number
        }, { collection: 'items' });
    };
    ItemModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("items", this.schema);
    };
    ItemModel.prototype.retrieveAllItemsfromUniqueCategory = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.retrieveAllItems = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.retrieveOneItem = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ItemModel;
}());
exports.ItemModel = ItemModel;
