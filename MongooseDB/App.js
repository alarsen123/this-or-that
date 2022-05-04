"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var ItemModel_1 = require("./model/ItemModel");
var CategoryModel_1 = require("./model/CategoryModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Items = new ItemModel_1.ItemModel();
        this.Category = new CategoryModel_1.CategoryModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get("/app/Items/", function (req, res) {
            console.log('Query All items');
            _this.Items.retrieveAllItems(res);
        });
        router.get("/app/Items/:item_id", function (req, res) {
            var id = req.params.item_id;
            console.log("Query single item with id:" + id);
            _this.Items.retrieveOneItem(res, { item_id: id });
        });
        router.get("/app/Items/Category/:category_id", function (req, res) {
            var id = req.params.category_id;
            console.log("Query All items from a unique category_id: " + id);
            _this.Items.retrieveAllItemsfromUniqueCategory(res, { category_id: id });
        });
        router.post("/app/Items/:item_name/:category_id", function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.item_name = req.params.item_name;
            jsonObj.category_id = req.params.category_id;
            var doc = new _this.Items.model(jsonObj);
            console.log("I am entering this:" + doc);
            doc.save(function (err) {
                console.log("object creation failed");
            });
            res.send(jsonObj);
        });
        router.get("/app/categoryList/", function (req, res) {
            console.log('Query All categories');
            _this.Category.retrieveAllCategories(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
