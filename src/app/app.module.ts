import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Section3Module} from './components/section3/section3.module';
import { Section2Module} from './components/section2/section2.module';
import { Section1Module} from './components/section1/section1.module';
import { HeaderModule} from './components/header/header.module';
import { FooterModule} from './components/footer/footer.module';
import { HomepageModule} from './components/homepage/homepage.module';
import { CarousselModule} from './components/caroussel/caroussel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Section3Module,
    Section2Module,
    Section1Module,
    HeaderModule,
    FooterModule,
    HomepageModule,
    CarousselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
