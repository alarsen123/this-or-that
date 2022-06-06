import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as mongodb from "mongodb";
import * as url from "url";
import * as bodyParser from "body-parser";
import * as session from "express-session";
import * as cookieParser from "cookie-parser";
import {ItemModel} from './model/ItemModel';
import {CategoryModel} from './model/CategoryModel';
import {UserModel} from "./model/UserModel";
import * as crypto from 'crypto';

import GooglePassportObj from "./GooglePassport";
import * as passport from "passport";

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Items:ItemModel;
  public Category:CategoryModel;
  public User:UserModel;

  public idGenerator: number;
  public googlePassportObj: GooglePassportObj;

  //Run configuration methods on the Express instance.
  constructor() {
    this.googlePassportObj = new GooglePassportObj();

    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Items = new ItemModel();
    this.Category = new CategoryModel();
    this.User = new UserModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    this.expressApp.use(session({ secret: 'keyboard cat' }));
    this.expressApp.use(cookieParser());
    this.expressApp.use(passport.initialize());
    this.expressApp.use(passport.session());
  }

  private validateAuth(req, res, next): void {
    if (req.isAuthenticated()) {
      console.log(
        "user is authenticated. username: " + req.user.username
      );
      return next();
    }
    console.log("user is not authenticated");
    res.redirect("http://localhost:4200/");
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.get(
      "/auth/google/",
      passport.authenticate("google", { scope: ["profile"] })
    );

    router.get(
      '/auth/google/callback/', 
      passport.authenticate('google', { failureRedirect: '/' }),
      (req, res) => {
        console.log("successfully authenticated user and returned to callback page.");
        console.log("redirecting to /app/items");
        //res.redirect('/#/Items');
        res.redirect('http://localhost:4200/Items');
      }
    );

    // Users
    router.post("/app/users/", (req, res) => {
      this.User.createUser(res, req.body);
    });

    router.get("/app/users/:user_id", async (req, res) => {
      console.log(req.params.user_id);
      this.User.getUser(res, { user_id: req.params.user_id });
    });

    router.get("/app/user/", this.validateAuth, async (req, res) => {
      this.User.getUser(res, {user_id:  passport.profile.id})
    });

  

    router.put("/app/users/", (req, res) => {
      this.User.updateUser(res, req.body);
    });

    router.delete("/app/users/", (req, res) => {
      this.User.deleteUser(res, req.body);
    });
  
    // Items
    //router.get("/app/Items/", this.validateAuth, (req,res) => {
    router.get("/app/Items/", (req,res) => {
      console.log('Query All items');
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Items.retrieveAllItems(res);
    });

    router.get("/app/Items/:item_id" , (req,res) => {
        var id = req.params.item_id;
        console.log("Query single item with id:" + id);
        res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
        this.Items.retrieveOneItem(res,{item_id:id})
    });

    router.get("/app/Items/Category/:category_id" , (req,res) =>{
        var id = req.params.category_id;
        console.log("Query All items from a unique category_id: " + id);
        res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
        this.Items.retrieveAllItemsfromUniqueCategory(res,{category_id:id});
    });

    // Get items voted on by a specific user
    router.get("/app/Items/User/:user_id" , this.validateAuth, (req,res) =>{
      var id = req.params.user_id;
      console.log("Query All items from a unique user_id: " + id);
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Items.retrieveAllItemsfromUniqueUser(res, id);
  });

    router.get("/app/standings/" , (req,res) => {
      console.log('Query Top 10 Most voted');
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Items.retrieve10mostvoted(res);
    });

    router.get("/app/randomQuestion/" , (req,res) => {
      console.log('Query A random question');
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Items.retrieveRandomQuestion(res);
    });

    router.get("/app/dailyQuestion/" , (req,res) => {
      console.log('Query A daily question');
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Items.retriveDailyQuestion(res);
    });

    router.post("/app/Items/",(req,res) => {
      const id = crypto.randomBytes(16).toString("hex");
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      console.log(req.body);
        var jsonObj = req.body;
        this.Items.model.create([jsonObj], (err) => {
          if (err) {
            console.log('object creation failed');
          }
        });
        res.send('{"id":"' + id + '"}');
    });

    router.get("/app/categories/" , (req,res) => {
      console.log('Query All categories');
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Category.retrieveAllCategories(res);
    });

    router.put("/app/Items/vote/:item_id", (req,res) => {
      var id = req.params.item_id;
      console.log("Update a single item with id:" + id);
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Items.updateVote(res,id);
    });

    
    // TODO: Use this if a user is logged in
    router.put("/app/Items/:item_id/vote/:user_id", this.validateAuth, (req,res) => {
      var item_id = req.params.item_id;
      var user_id = req.params.user_id;
      console.log("Update a single item with id: " + item_id + " as user: " + user_id);
      res.header("Acces-Control-Allow-Origin", "http://localhost:8080")
      this.Items.updateItemAfterVote(res,[item_id,user_id]);
      this.User.updateUserAfterVote(res,[item_id,user_id]);
    });

    const cors = require('cors');
    this.expressApp.use(cors({
      origin: '*',
      methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }));

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/angularDist'));
    
  }

}

export {App};