import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { MarkerPageComponent } from './pages/marker-page/marker-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'fullscreen', component: FullScreenPageComponent },
      { path: 'marker', component: MarkerPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: 'zoom', component: ZoomPageComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
