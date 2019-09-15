import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ExportkisteComponent } from './kisten-details/exportkiste/exportkiste.component';
import { TransportkisteComponent } from './kisten-details/transportkiste/transportkiste.component';
import { ObstkisteComponent } from './kisten-details/obstkiste/obstkiste.component';
import { TransportpaletteComponent } from './kisten-details/transportpalette/transportpalette.component';
import { PrismeComponent } from './kisten-details/prisme/prisme.component';
import { VerschlageComponent } from './kisten-details/verschlage/verschlage.component';

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
                 VerschlageComponent]
})
export class ProductDetailsModule { }
