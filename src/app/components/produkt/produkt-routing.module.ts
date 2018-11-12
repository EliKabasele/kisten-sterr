import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduktCategoriesComponent} from './categories/produkt-categories.component';
import {ProduktKistenComponent} from './kisten/produkt-kisten.component';
import {BeabHolzComponent} from './beab-holz/beab-holz.component';

const routes: Routes = [
  {
    path: 'Kategorie',
    component: ProduktCategoriesComponent
  },
  {
    path: 'kategorie/Kisten',
    component: ProduktKistenComponent
  },
  {
    path: 'kategorie/beab-holz',
    component: BeabHolzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduktRoutingModule { }
