import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnternehmenComponent} from './unternehmen.component';
import { KundenserviceComponent } from './kundenservice/kundenservice.component';
import { LieferserviceComponent } from './lieferservice/lieferservice.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';

const routes: Routes = [
  {
    path: 'unternehmen',
    component: UnternehmenComponent
  },
  {
    path: 'unternehmen/kundenservice',
    component: KundenserviceComponent
  },
  {
    path: 'unternehmen/lieferservice',
    component: LieferserviceComponent
  },
  {
    path: 'unternehmen/ueberuns',
    component: UeberunsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnternehmenRoutingModule { }
