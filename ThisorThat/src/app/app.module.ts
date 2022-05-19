import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DailyQuestionComponent } from './daily-question/daily-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    DailyQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
