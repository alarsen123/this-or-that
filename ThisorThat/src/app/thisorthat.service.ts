import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThisorthatService {

  hostUrl:string = 'http://localhost:8080/';
  url:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {

   }

   getItems() {
     return "";
   }

   getCategories() {
     return "";
   }
}
