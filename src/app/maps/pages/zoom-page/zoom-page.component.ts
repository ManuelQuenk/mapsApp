import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'No elementRef found'

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center:[-64, -31],
      zoom: this.zoom,
    });

    this.mapListener()
  }

  mapListener() {
    if (!this.map) throw 'Mapa malo'

    this.map.on('zoom', (e) => {
      this.zoom = this.map!.getZoom();
    })

    this.map.on('zoomend', (e) => {
      if ( this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo(18)
    })
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

}
