import { Component, OnInit } from '@angular/core';
import { ItemsClass } from '../items-class';
import { ThisorthatService } from '../thisorthat.service';

@Component({
  selector: 'app-random-question',
  templateUrl: './random-question.component.html',
  styleUrls: ['./random-question.component.css']
})
export class RandomQuestionComponent implements OnInit {

  results: Array<ItemsClass> = [];
  constructor(private apiService: ThisorthatService) { }

  ngOnInit(): void {
    this.apiService.getRandomQuestion().subscribe((result: ItemsClass[]) =>{
      this.results = result;
      console.log("Random question results: " + JSON.stringify(result));
    });
  }

}
