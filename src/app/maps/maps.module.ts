import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';


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
