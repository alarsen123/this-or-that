import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest} from '@angular/common/http';
import { ItemClass } from './item-class';
import { CategoryClass } from './category-class';

@Injectable({
  providedIn: 'root'
})
export class ThisorthatService {

  hostUrl:string = 'http://localhost:8080';

  constructor(private http: HttpClient) {

   }

   getItems() {
     return this.http.get<ItemClass[]>(this.hostUrl +"/app/Items" );
   }
   getItem(id:number){
     return this.http.get<any>(this.hostUrl + "/app/Items/" + id);
   }

   getRandomQuestion(){
    return this.http.get<ItemClass[]>(this.hostUrl +"/app/randomQuestion" );
   }

   getStandings(){
    return this.http.get<ItemClass[]>(this.hostUrl +"/app/standings" );
   }

   getItemsFromUniqueCategory(id:number){
    return this.http.get<ItemClass[]>(this.hostUrl + "/app/Items/Category/" + id);
   }

   getCategories() {
    return this.http.get<CategoryClass[]>(this.hostUrl +"/app/categories" );
   }
   getDailyQuestion(){
     return this.http.get<ItemClass[]>(this.hostUrl + "/app/dailyQuestion")
   }
}
