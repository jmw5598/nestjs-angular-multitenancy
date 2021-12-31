import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'xyz-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  public options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 12,
    center: latLng([ 42.6055893, -83.1499304 ])
  };

  constructor() { }

  ngOnInit(): void {
  }

}
