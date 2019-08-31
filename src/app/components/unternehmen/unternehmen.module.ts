import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnternehmenRoutingModule } from './unternehmen-routing.module';
import { UnternehmenComponent } from './unternehmen.component';
import { KundenserviceComponent } from './kundenservice/kundenservice.component';
import { LieferserviceComponent } from './lieferservice/lieferservice.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';

@NgModule({
  imports: [
    CommonModule,
    UnternehmenRoutingModule
  ],
  declarations: [UnternehmenComponent, KundenserviceComponent, LieferserviceComponent, UeberunsComponent]
})
export class UnternehmenModule { }
