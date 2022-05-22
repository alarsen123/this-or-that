import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest} from '@angular/common/http';
import { ItemClass } from './item-class';
import { CategoryClass } from './category-class';

@Injectable({
  providedIn: 'root'
})
export class ThisorthatService {

  hostUrl:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {

   }

   getItems() {
     return this.http.get<ItemClass[]>(this.hostUrl +"/app/Items.json" );
   }
   getItem(id:number){
     return this.http.get<any>(this.hostUrl + "/app/Items/" + id + ".json");
   }

   getRandomQuestion(){
    return this.http.get<ItemClass[]>(this.hostUrl +"/app/randomQuestion.json" );
   }

   getStandings(){
    return this.http.get<ItemClass[]>(this.hostUrl +"/app/standings.json" );
   }

   getItemsFromUniqueCategory(id:number){
    return this.http.get<ItemClass[]>(this.hostUrl + "/app/Items/Category/" + id + ".json");
   }

   getCategories() {
    return this.http.get<CategoryClass[]>(this.hostUrl +"/app/categories.json" );
   }
}
