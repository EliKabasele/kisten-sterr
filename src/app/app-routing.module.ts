import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatenschutzComponent} from './components/datenschutz/datenschutz.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
