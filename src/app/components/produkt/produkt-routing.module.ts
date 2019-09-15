import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduktKistenComponent} from './kisten/produkt-kisten.component';
import {BeabHolzComponent} from './beab-holz/beab-holz.component';

const routes: Routes = [
  {
    path: 'kategorie/Kisten',
    component: ProduktKistenComponent
  },
  {
    path: 'kategorie/Holzhandlung',
    component: BeabHolzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduktRoutingModule { }
