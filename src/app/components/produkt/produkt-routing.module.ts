import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduktCategoriesComponent} from './categories/produkt-categories.component';

const routes: Routes = [
  {
    path: 'Kategorie',
    component: ProduktCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduktRoutingModule { }
