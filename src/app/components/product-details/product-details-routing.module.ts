import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportkisteComponent } from './kisten-details/exportkiste/exportkiste.component';
import { TransportkisteComponent } from './kisten-details/transportkiste/transportkiste.component';
import { TransportpaletteComponent } from './kisten-details/transportpalette/transportpalette.component';
import { PrismeComponent } from './kisten-details/prisme/prisme.component';
import { VerschlageComponent } from './kisten-details/verschlage/verschlage.component';
import { ObstkisteComponent } from './kisten-details/obstkiste/obstkiste.component';
import { BlockwareComponent } from './holzhandlung-details/blockware/blockware.component';
import { BretterComponent } from './holzhandlung-details/bretter/bretter.component';
import { GartenholzComponent } from './holzhandlung-details/gartenholz/gartenholz.component';
import { HolzwerkstoffeComponent } from './holzhandlung-details/holzwerkstoffe/holzwerkstoffe.component';
import { KantholzComponent } from './holzhandlung-details/kantholz/kantholz.component';

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
  },
  {
    path: 'produkte/holzhandlung/blockware',
    component: BlockwareComponent
  },
  {
    path: 'produkte/holzhandlung/bretter',
    component: BretterComponent
  },
  {
    path: 'produkte/holzhandlung/gartenholz',
    component: GartenholzComponent
  },
  {
    path: 'produkte/holzhandlung/holzwerkstoff',
    component: HolzwerkstoffeComponent
  },
  {
    path: 'produkte/holzhandlung/kantholz',
    component: KantholzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
