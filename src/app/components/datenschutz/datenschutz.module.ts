import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatenschutzRoutingModule } from './datenschutz-routing.module';
import { DatenschutzComponent } from './datenschutz.component';

@NgModule({
  imports: [
    CommonModule,
    DatenschutzRoutingModule
  ],
  declarations: [DatenschutzComponent]
})
export class DatenschutzModule { }
