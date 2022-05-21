import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';

@Component({
  selector: 'app-daily-question',
  templateUrl: './daily-question.component.html',
  styleUrls: ['./daily-question.component.css']
})
export class DailyQuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dailyQuestionService: ThisorthatService) { }

  ngOnInit(): void {
    this.dailyQuestionService.getRandomQuestion().subscribe((result: any) => 
    {
      console.log('result' + JSON.stringify(result));
    });
  }

}
