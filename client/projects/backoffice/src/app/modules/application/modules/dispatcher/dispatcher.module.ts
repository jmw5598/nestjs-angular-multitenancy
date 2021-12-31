import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapComponent } from './pages/map/map.component';
import { DispatcherRoutingModule } from './dispatcher-routing.module';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    DispatcherRoutingModule,
    LeafletModule
  ]
})
export class DispatcherModule { }
