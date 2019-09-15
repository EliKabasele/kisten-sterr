import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportkisteComponent } from './kisten-details/exportkiste/exportkiste.component';
import { TransportkisteComponent } from './kisten-details/transportkiste/transportkiste.component';
import { TransportpaletteComponent } from './kisten-details/transportpalette/transportpalette.component';
import { PrismeComponent } from './kisten-details/prisme/prisme.component';
import { VerschlageComponent } from './kisten-details/verschlage/verschlage.component';
import { ObstkisteComponent } from './kisten-details/obstkiste/obstkiste.component';

const routes: Routes = [
  {
    path: 'produkte/kisten/exportkiste',
    component:ExportkisteComponent
  },
  {
    path: 'produkte/kisten/transportkiste',
    component: TransportkisteComponent
  },
  {
    path: 'produkte/kisten/transportpalette',
    component: TransportpaletteComponent
  },
  {
    path: 'produkte/kisten/prisme',
    component: PrismeComponent
  },
  {
    path: 'produkte/kisten/verschlag',
    component: VerschlageComponent
  },
  {
    path: 'produkte/kisten/obstkiste',
    component: ObstkisteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
