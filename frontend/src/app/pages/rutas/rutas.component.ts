import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MapViewerComponent,
  RouteMarker,
} from '../../components/ui/map-viewer/map-viewer.component';
import {
  RouteCardComponent,
  RouteData,
} from '../../components/ui/route-card/route-card.component';
import { CustomButtonComponent } from '../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [
    CommonModule,
    MapViewerComponent,
    RouteCardComponent,
    CustomButtonComponent,
  ],
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css'],
})
export class RutasComponent {
  // Datos de ejemplo para las rutas
  routes: RouteData[] = [
    {
      id: '1',
      name: 'Parque Simón Bolívar',
      description:
        'El "pulmón verde" de Bogotá. Ideal para trotar, montar en bici, pícnics y eventos.',
      address: 'Calle 63 #48-17, Teusaquillo',
      activities: 'Caminata, bicicleta, pícnics',
      type: 'Parque metropolitano',
      imageUrl: 'assets/img/ParqueMetropolitanoSimonBolivar.jpg',
    },
    {
      id: '2',
      name: 'Quebrada La Vieja',
      description:
        'Sendero ecológico en los Cerros Orientales, ideal para observación de aves.',
      address: 'Bogotá, Colombia',
      activities: 'Senderismo, observación de aves',
      type: 'Bosque',
      imageUrl: 'assets/img/quebrada.jpg',
    },
    {
      id: '3',
      name: 'Cerro de Monserrate',
      description: 'Ascenso a uno de los miradores más emblemáticos de Bogotá.',
      address: 'Bogotá, Colombia',
      activities: 'Caminata, senderismo',
      type: 'Montaña',
      imageUrl: 'assets/img/monserrate.jpg',
    },
    {
      id: '4',
      name: 'Chicaque',
      description:
        'Parque natural con senderos de niebla y gran biodiversidad.',
      address: 'San Antonio del Tequendama',
      activities: 'Senderismo, camping',
      type: 'Bosque de niebla',
      imageUrl: 'assets/img/chicaque.jpg',
    },
  ];

  // Marcadores para el mapa (coordenadas aproximadas)
  markers: RouteMarker[] = this.routes.map((r, index) => ({
    lat: 4.658383 + index * 0.01, // Solo para variar un poco
    lng: -74.09394 + index * 0.01,
    name: r.name,
    description: r.description,
    address: r.address,
    activities: r.activities,
    type: r.type,
    zoom: 14,
  }));

  selectedMarker?: RouteMarker;

  onViewRoute(routeId: string): void {
    const route = this.routes.find((r) => r.id === routeId);
    if (route) {
      this.selectedMarker = this.markers.find((m) => m.name === route.name);
    }
  }
}
