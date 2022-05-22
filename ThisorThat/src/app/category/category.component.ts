import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';
import { CategoryClass } from '../category-class';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  results: Array<CategoryClass>= [];

  constructor(private route: ActivatedRoute, private categoryService: ThisorthatService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( (result: CategoryClass[]) => 
    {
      console.log('result' + JSON.stringify(result));
      this.results = result;
    });
  }

  link(i:number): string {
    return '/categorydetails/' + (i+1);
  }

}
