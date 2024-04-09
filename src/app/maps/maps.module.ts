import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';// or "const mapboxgl = require('mapbox-gl');"
(mapboxgl as any).accessToken = "pk.eyJ1IjoibXVsbGV0bWFudSIsImEiOiJjbHVzaWp3Z3EwajE5Mmpua3Y1Nm00NWIzIn0.BXH02qD27MpXTxHmKUcGfQ";


import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    FullScreenPageComponent,
    MarkerPageComponent,
    ZoomPageComponent,
    PropertiesPageComponent,
    MiniMapComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
