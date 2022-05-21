import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DailyQuestionComponent } from './daily-question/daily-question.component';
import { StandingComponent } from './standing/standing.component';
import { ItemComponent } from './item/item.component';
import { RandomQuestionComponent } from './random-question/random-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DailyQuestionComponent,
    StandingComponent,
    ItemComponent,
    RandomQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
