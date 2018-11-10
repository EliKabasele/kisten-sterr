import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnternehmenRoutingModule } from './unternehmen-routing.module';
import { UnternehmenComponent } from './unternehmen.component';

@NgModule({
  imports: [
    CommonModule,
    UnternehmenRoutingModule
  ],
  declarations: [UnternehmenComponent]
})
export class UnternehmenModule { }
