import { Component, OnInit } from '@angular/core';
import { ItemClass } from '../item-class';
import { ThisorthatService } from '../thisorthat.service';

@Component({
  selector: 'app-random-question',
  templateUrl: './random-question.component.html',
  styleUrls: ['./random-question.component.css']
})
export class RandomQuestionComponent implements OnInit {

  results: Array<ItemClass> = [];
  constructor(private apiService: ThisorthatService) { }

  ngOnInit(): void {
    this.apiService.getRandomQuestion().subscribe((result: ItemClass[]) =>{
      this.results = result;
      console.log("Random question results: " + JSON.stringify(result));
    });
  }

}
