import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduktRoutingModule } from './produkt-routing.module';
import { ProduktKistenComponent } from './kisten/produkt-kisten.component';
import { BeabHolzComponent } from './beab-holz/beab-holz.component';

@NgModule({
  imports: [
    CommonModule,
    ProduktRoutingModule
  ],
  declarations: [ProduktKistenComponent, BeabHolzComponent]
})
export class ProduktModule { }
