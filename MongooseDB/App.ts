import * as express from 'express';
import * as bodyParser from 'body-parser';
import {ItemModel} from './model/ItemModel';
import {CategoryModel} from './model/CategoryModel';
import * as crypto from 'crypto';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Items:ItemModel;
  public Category:CategoryModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Items = new ItemModel();
    this.Category = new CategoryModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    router.get('/app/list/:listId/count', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        this.Tasks.retrieveTasksCount(res, {listId: id});
    });

    router.get("/app/Items/", (req,res) =>{
      console.log('Query All items');
      this.Items.retrieveAllItems(res);
    });

    router.get("/app/Items/:item_id" , (req,res) =>{
        var id = req.params.item_id;
        console.log("Query single item with id:" + id);
        this.Items.retrieveOneItem(res,{item_id:id})
    });

    router.get("/app/Items/Category/:category_id" , (req,res) =>{
        var id = req.params.category_id;
        console.log("Query All items from a unique category_id: " + id);
        this.Items.retrieveAllItemsfromUniqueCategory(res,{category_id:id});
    });

    router.post("/app/")


  
    router.post('/app/list/', (req, res) => {
      const id = crypto.randomBytes(16).toString("hex");
      console.log(req.body);
        var jsonObj = req.body;
        jsonObj.listId = id;
        this.Lists.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send('{"id":"' + id + '"}');
    });

    router.post('/app/list2/', (req, res) => {
      const id = crypto.randomBytes(16).toString("hex");
      console.log(req.body);
        var jsonObj = req.body;
        jsonObj.listId = id;
        let doc = new this.Lists.model(jsonObj);
        doc.save((err) => {
           console.log('object creation failed');
        });
        res.send('{"id":"' + id + '"}');
    });

    router.get('/app/list/:listId', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        this.Tasks.retrieveTasksDetails(res, {listId: id});
    });

    router.get('/app/list/', (req, res) => {
        console.log('Query All list');
        this.Lists.retrieveAllLists(res);
    });

    router.get('/app/listcount', (req, res) => {
      console.log('Query the number of list elements in db');
      this.Lists.retrieveListCount(res);
    });

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};