import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';
import { ItemClass } from '../item-class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  results: Array<ItemClass>= [];

  constructor(private route: ActivatedRoute, private profileService: ThisorthatService) { }

  ngOnInit(): void {
    this.profileService.getItemsFromUser().subscribe((result: ItemClass[]) => 
    {
      console.log('result' + JSON.stringify(result));
      this.results = result;
    });
  }

}