import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';



@NgModule({
  declarations: [
    LoadingDotsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingDotsComponent
  ]
})
export class XyzLoadingModule { }
