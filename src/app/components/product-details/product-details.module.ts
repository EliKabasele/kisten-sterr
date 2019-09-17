import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ExportkisteComponent } from './kisten-details/exportkiste/exportkiste.component';
import { TransportkisteComponent } from './kisten-details/transportkiste/transportkiste.component';
import { ObstkisteComponent } from './kisten-details/obstkiste/obstkiste.component';
import { TransportpaletteComponent } from './kisten-details/transportpalette/transportpalette.component';
import { PrismeComponent } from './kisten-details/prisme/prisme.component';
import { VerschlageComponent } from './kisten-details/verschlage/verschlage.component';
import { KantholzComponent } from './holzhandlung-details/kantholz/kantholz.component';
import { BretterComponent } from './holzhandlung-details/bretter/bretter.component';
import { GartenholzComponent } from './holzhandlung-details/gartenholz/gartenholz.component';
import { BlockwareComponent } from './holzhandlung-details/blockware/blockware.component';
import { HolzwerkstoffeComponent } from './holzhandlung-details/holzwerkstoffe/holzwerkstoffe.component';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutingModule
  ],
  declarations: [ExportkisteComponent, 
                 TransportkisteComponent,
                 ObstkisteComponent, 
                 TransportpaletteComponent, 
                 PrismeComponent, 
                 VerschlageComponent, KantholzComponent, BretterComponent, GartenholzComponent, BlockwareComponent, HolzwerkstoffeComponent]
})
export class ProductDetailsModule { }
