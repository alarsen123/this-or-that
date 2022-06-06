import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';
//import { ItemClass } from '../item-class';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  results: Array<UserClass>= [];

  constructor(private route: ActivatedRoute, private profileService: ThisorthatService) { }

  ngOnInit(): void {
    this.profileService.getUserId().subscribe((result: any) => 
    {
      console.log('result' + JSON.stringify(result));
      this.results = result;
      if(!Array.isArray(result)) {
        this.results = [result]
      } 
    });
  }

}