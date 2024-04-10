import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy{


  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-64.21706407384838, -31.373130544094636)

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'No elementRef found'

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: this.zoom,
    });

    this.mapListener()
  }

  ngOnDestroy(): void {
    this.map?.remove();
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

    this.map.on('move', (e) => {
      this.currentLngLat = this.map!.getCenter()
    })

  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged( value:string ):void {
    this.zoom = Number(value)
    this.map?.zoomTo(this.zoom)
  }

}
