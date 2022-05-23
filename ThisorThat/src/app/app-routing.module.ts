import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { DailyQuestionComponent } from './daily-question/daily-question.component';
import { StandingComponent } from './standing/standing.component';
import { RandomQuestionComponent } from './random-question/random-question.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Category', component:CategoryComponent},
  {path: 'Items', component: ItemComponent},
  {path: 'dailyquestion', component:DailyQuestionComponent},
  {path: 'standings', component:StandingComponent},
  {path: 'randomQuestion', component:RandomQuestionComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
