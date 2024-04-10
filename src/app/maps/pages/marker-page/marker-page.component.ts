import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl'

interface MarkerAndColor{
  color: string;
  marker: Marker
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}


@Component({
  templateUrl: './marker-page.component.html',
  styleUrl: './marker-page.component.css'
})
export class MarkerPageComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-64, -31)

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'No elementRef found'

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 13,
    });

    this.loadFromLocalStorage();
  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker( lngLat, color);

  }


  addMarker( lngLat:LngLat, color:string ) {
    if ( !this.map ) return;

    const marker = new Marker({
      color,
      draggable:true
    })
     .setLngLat( lngLat )
     .addTo( this.map )

    this.markers.push({ color, marker });
    this.saveToLocalStorage()

    marker.on('dragend', () => this.saveToLocalStorage() );
  }

  deleteMarker( index:number ) {
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
  }

  flyTo( marker: Marker ) {
    if ( !this.map ) return;

    this.map.flyTo({
      zoom:14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage()  {
    const plainMarkers: PlainMarker[] = this.markers.map( ({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers))

  }

  loadFromLocalStorage() {
    const plainMarkerString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkerString )

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const cords = new LngLat(lng, lat);

      this.addMarker( cords, color );
    })
  }

}
