import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryService: ThisorthatService) { }

  ngOnInit(): void {
    this.categoryService.getRandomQuestion().subscribe((result: any) => 
    {
      console.log('result' + JSON.stringify(result));
    });
  }

}
