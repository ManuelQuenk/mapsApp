import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route:'/maps/fullscreen', name:'Pantalla Completa' },
    { route:'/maps/marker', name:'Marcadores' },
    { route:'/maps/zoom', name:'Zoom' },
    { route:'/maps/properties', name:'Propiedades' },
  ]


}
