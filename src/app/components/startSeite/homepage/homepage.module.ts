import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Section1Module} from '../section1/section1.module';
import { Section2Module} from '../section2/section2.module';
import { Section3Module} from '../section3/section3.module';
import { CarousselModule} from '../caroussel/caroussel.module';
import {HomepageRoutingModule} from './homepage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Section1Module,
    Section2Module,
    Section3Module,
    CarousselModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent]
})
export class HomepageModule { }
