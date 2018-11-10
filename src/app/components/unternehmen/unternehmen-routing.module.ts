import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnternehmenComponent} from './unternehmen.component';

const routes: Routes = [
  {
    path: 'unternehmen',
    component: UnternehmenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnternehmenRoutingModule { }
