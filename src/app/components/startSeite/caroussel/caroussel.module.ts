import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousselComponent } from './caroussel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarousselComponent],
  exports: [CarousselComponent]
})
export class CarousselModule { }
