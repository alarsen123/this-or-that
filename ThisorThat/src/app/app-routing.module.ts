import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { DailyQuestionComponent } from './daily-question/daily-question.component';
import { StandingComponent } from './standing/standing.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'item', component: ItemComponent},
  {path: 'dailyquestion', component:DailyQuestionComponent},
  {path: 'standing', component:StandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
