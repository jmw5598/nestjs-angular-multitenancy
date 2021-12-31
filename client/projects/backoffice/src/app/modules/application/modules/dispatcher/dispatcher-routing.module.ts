import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '**',
    redirectTo: 'map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatcherRoutingModule { }