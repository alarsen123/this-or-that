import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private itemService: ThisorthatService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((result: any) => 
    {
      console.log('result' + JSON.stringify(result));
    });
  }

}
