import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest} from '@angular/common/http';
import { ItemClass } from './item-class';
import { CategoryClass } from './category-class';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class ThisorthatService {

  hostUrl:string = 'http://localhost:8080';
  //hostUrl:string = 'https://thisorthatsu22.azurewebsites.net';

  constructor(private http: HttpClient) {

   }

   getItems() {
     return this.http.get<ItemClass[]>(this.hostUrl +"/app/Items" );
     //return this.http.get<ItemClass[]>("/app/Items" );
   }

   getItem(id:number){
     return this.http.get<any>(this.hostUrl + "/app/Items/" + id);
     //return this.http.get<any>("/app/Items/" + id);
   }

   getRandomQuestion(){
    return this.http.get<ItemClass[]>(this.hostUrl +"/app/randomQuestion" );
    //return this.http.get<ItemClass[]>("/app/randomQuestion" );
   }

   getStandings(){
    return this.http.get<ItemClass[]>(this.hostUrl +"/app/standings" );
    //return this.http.get<ItemClass[]>("/app/standings" );
   }

   getItemsFromUniqueCategory(id:number){
    return this.http.get<ItemClass[]>(this.hostUrl + "/app/Items/Category/" + id);
    //return this.http.get<ItemClass[]>( "/app/Items/Category/" + id);
   }

   getCategories() {
    return this.http.get<CategoryClass[]>(this.hostUrl +"/app/categories" );
    //return this.http.get<CategoryClass[]>("/app/categories" );
   }

   getDailyQuestion() {
     return this.http.get<ItemClass[]>(this.hostUrl + "/app/dailyQuestion");
     //return this.http.get<ItemClass[]>( "/app/dailyQuestion");
   }
   
   getSSO() {
    return this.http.get<any>(this.hostUrl + "/auth/google");
    //return this.http.get<any>("/auth/google");
   }

   getSSOCallback() {
    return this.http.get<any>(this.hostUrl + "/auth/google/callback");
    //return this.http.get<any>( "/auth/google/callback");
   }

   updateVote(id:number, item:ItemClass){
    const url = this.hostUrl + "/app/Items/vote/" + id;
    const data = JSON.stringify(item);
    return this.http.put(url, data).subscribe();
    //return this.http.put<any>(this.hostUrl + "/app/Items/vote/" + id);
   }
   updateVoteFromUser(item_id:number, user_id:number, item:ItemClass){
     const url = this.hostUrl + "/app/Items/" + item_id + "/vote/" + user_id;
     const data = JSON.stringify(item);
     return this.http.put(url,data).subscribe();
   }
   getItemsFromUser(){
     return this.http.get<ItemClass[]>(this.hostUrl + "/app/Items/User/" + {user_id:this.getUserId()});
     //return this.http.get<ItemClass[]>( "/app/Items/User/:user_id");
   }
   getUserId(){
     return this.http.get<UserClass[]>(this.hostUrl + "/app/users/");
   }
}
