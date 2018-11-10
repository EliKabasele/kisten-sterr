import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  declarations: [ServiceComponent]
})
export class ServiceModule { }
