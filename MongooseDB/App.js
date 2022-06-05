"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var ItemModel_1 = require("./model/ItemModel");
var CategoryModel_1 = require("./model/CategoryModel");
var crypto = require("crypto");
var GooglePassport_1 = require("./GooglePassport");
var passport = require("passport");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.googlePassportObj = new GooglePassport_1["default"]();
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Items = new ItemModel_1.ItemModel();
        this.Category = new CategoryModel_1.CategoryModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: 'keyboard cat' }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    };
    App.prototype.validateAuth = function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/');
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to /#/Items");
            res.redirect('/#/Items');
        });
        router.get("/app/Items/", function (req, res) {
            console.log('Query All items');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveAllItems(res);
        });
        router.get("/app/Items/:item_id", function (req, res) {
            var id = req.params.item_id;
            console.log("Query single item with id:" + id);
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveOneItem(res, { item_id: id });
        });
        router.get("/app/Items/Category/:category_id", function (req, res) {
            var id = req.params.category_id;
            console.log("Query All items from a unique category_id: " + id);
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveAllItemsfromUniqueCategory(res, { category_id: id });
        });
        router.get("/app/standings/", function (req, res) {
            console.log('Query Top 10 Most voted');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieve10mostvoted(res);
        });
        router.get("/app/randomQuestion/", function (req, res) {
            console.log('Query A random question');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retrieveRandomQuestion(res);
        });
        router.get("/app/dailyQuestion/", function (req, res) {
            console.log('Query A daily question');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.retriveDailyQuestion(res);
        });
        router.post("/app/Items/", function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            console.log(req.body);
            var jsonObj = req.body;
            _this.Items.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get("/app/categories/", function (req, res) {
            console.log('Query All categories');
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Category.retrieveAllCategories(res);
        });
        router.put("/app/Items/vote/:item_id", function (req, res) {
            var id = req.params.item_id;
            console.log("Update a single item with id:" + id);
            res.header("Acces-Control-Allow-Origin", "http://localhost:4200");
            _this.Items.updateVote(res, id);
        });
        var cors = require('cors');
        this.expressApp.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
        }));
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
