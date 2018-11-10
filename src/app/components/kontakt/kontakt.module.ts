import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './kontakt.component';

@NgModule({
  imports: [
    CommonModule,
    KontaktRoutingModule
  ],
  declarations: [KontaktComponent]
})
export class KontaktModule { }
