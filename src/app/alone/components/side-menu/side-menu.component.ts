import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports:[RouterModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route:'/maps/fullscreen', name:'Pantalla Completa' },
    { route:'/maps/marker', name:'Marcadores' },
    { route:'/maps/zoom', name:'Zoom' },
    { route:'/maps/properties', name:'Propiedades' },
    { route:'/alone', name:'Solito' },
  ]


}
