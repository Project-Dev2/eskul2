import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoursesComponent } from './courses/courses.component';
import { LevelComponent } from './leftBox/level/level.component';
import { ProductComponent } from './leftBox/product/product.component';
import { DurationComponent } from './leftBox/duration/duration.component';
import { LanguageComponent } from './leftBox/language/language.component';
import { SkillsComponent } from './leftBox/skills/skills.component';
import { PriceComponent } from './leftBox/price/price.component';
import { RelatedInstructorComponent } from './rightBox/related-instructor/related-instructor.component';
import { TopInstructorsComponent } from './rightBox/top-instructors/top-instructors.component';
import { GridInstructorComponent } from './rightBox/grid-instructor/grid-instructor.component';
import { ListInstructorComponent } from './rightBox/list-instructor/list-instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LevelComponent,
    ProductComponent,
    DurationComponent,
    LanguageComponent,
    SkillsComponent,
    PriceComponent,
    RelatedInstructorComponent,
    TopInstructorsComponent,
    GridInstructorComponent,
    ListInstructorComponent,
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
