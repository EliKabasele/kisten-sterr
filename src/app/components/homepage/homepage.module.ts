import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { FooterModule} from '../footer/footer.module';
import { HeaderModule} from '../header/header.module';
import { Section1Module} from '../section1/section1.module';
import { Section2Module} from '../section2/section2.module';
import { Section3Module} from '../section3/section3.module';
import { CarousselModule} from '../caroussel/caroussel.module';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    Section1Module,
    Section2Module,
    Section3Module,
    CarousselModule
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent]
})
export class HomepageModule { }
