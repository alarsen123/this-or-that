import { Component, OnInit } from '@angular/core';
import { ItemsClass } from '../items-class';
import { ThisorthatService } from '../thisorthat.service';


@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {

  results: Array<ItemsClass> = [];
  constructor(private apiService: ThisorthatService) { }

  ngOnInit(): void {
    this.apiService.getStandings().subscribe((result: ItemsClass[]) =>{
      this.results = result;
      console.log("Standings results: " + JSON.stringify(result));
    });
  }
  

}
