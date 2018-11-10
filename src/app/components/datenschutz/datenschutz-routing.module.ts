import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatenschutzComponent} from './datenschutz.component';

const routes: Routes = [
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatenschutzRoutingModule { }
