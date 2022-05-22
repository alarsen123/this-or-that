import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';
import { ItemClass } from '../item-class';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  results: Array<ItemClass>= [];

  constructor(private route: ActivatedRoute, private itemService: ThisorthatService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe( (result: ItemClass[]) => 
    {
      console.log('result' + JSON.stringify(result));
      this.results = result;
    });
  }

  link(i:number): string {
    return '/itemdetails/' + (i+1);
  }

}
