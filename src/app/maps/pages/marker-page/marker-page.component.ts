import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl'

@Component({
  templateUrl: './marker-page.component.html',
  styleUrl: './marker-page.component.css'
})
export class MarkerPageComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-64, -31)

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'No elementRef found'

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 9,
    });

  }

}
