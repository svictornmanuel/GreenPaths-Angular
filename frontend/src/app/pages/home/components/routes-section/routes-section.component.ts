import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteCardComponent } from '../../../../components/ui/route-card/route-card.component';
import { MapService } from '../../../../core/services/map.service';

export interface RouteData {
  id: string;
  name: string;
  description: string;
  address: string;
  activities: string;
  type: string;
  imageUrl: string;
}

@Component({
  selector: 'app-routes-section',
  standalone: true,
  imports: [CommonModule, RouteCardComponent],
  templateUrl: './routes-section.component.html',
  styleUrls: ['./routes-section.component.css']
})
export class RoutesSectionComponent {
  routes: RouteData[] = [
    {
      id: 'simon-bolivar',
      name: 'Parque Metropolitano Simón Bolívar',
      description: "El 'pulmón verde' de Bogotá. Ideal para trotar, montar en bici, pícnics y eventos.",
      address: 'Calle 63 #48-17, Teusaquillo',
      activities: 'Caminata, bicicleta, pícnics',
      type: 'Parque metropolitano',
      imageUrl: 'assets/img/ParqueMetropolitanoSimonBolivar.jpg'
    }
  ];

  constructor(private mapService: MapService) {}

  onViewRoute(routeId: string): void {
    console.log('RoutesSection: onViewRoute', routeId);
    this.mapService.showRoute(routeId);
  }
}