import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Section3Module} from './components/startSeite/section3/section3.module';
import { Section2Module} from './components/startSeite/section2/section2.module';
import { Section1Module} from './components/startSeite/section1/section1.module';
import { HeaderModule} from './components/header/header.module';
import { FooterModule} from './components/footer/footer.module';
import { HomepageModule} from './components/startSeite/homepage/homepage.module';
import { CarousselModule} from './components/startSeite/caroussel/caroussel.module';
import { DatenschutzModule} from './components/datenschutz/datenschutz.module';
import { ImpressumModule} from './components/impressum/impressum.module';
import { KontaktModule} from './components/kontakt/kontakt.module';
import { ProduktModule} from './components/produkt/produkt.module';
import { UnternehmenModule} from './components/unternehmen/unternehmen.module';
import { ProductDetailsModule } from './components/product-details/product-details.module';

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
    CarousselModule,
    DatenschutzModule,
    ImpressumModule,
    KontaktModule,
    ProduktModule,
    UnternehmenModule,
    ProductDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
