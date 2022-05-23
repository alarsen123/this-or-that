import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';
import { ItemClass } from '../item-class';

@Component({
  selector: 'app-daily-question',
  templateUrl: './daily-question.component.html',
  styleUrls: ['./daily-question.component.css']
})
export class DailyQuestionComponent implements OnInit {

  results: Array<ItemClass>=[];

  constructor(private route: ActivatedRoute, private dailyQuestionService: ThisorthatService) { }

  ngOnInit(): void {
    this.dailyQuestionService.getDailyQuestion().subscribe((result: any) => 
    {
      this.results = result;
      console.log('result' + JSON.stringify(result));
    });
  }

}
