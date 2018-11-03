import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Section1Component],
  exports: [Section1Component]
})
export class Section1Module { }
