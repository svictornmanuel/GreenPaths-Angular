import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MapViewerComponent } from '../../components/ui/map-viewer/map-viewer.component';
import { RouteData } from '../../components/ui/route-card/route-card.component';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { RoutesSectionComponent } from "./components/routes-section/routes-section.component";
import { HealthSectionComponent } from "./components/health-section/health-section.component";
import { EnvironmentSectionComponent } from "./components/environment-section/environment-section.component";
import { ContributeSectionComponent } from "./components/contribute-section/contribute-section.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeroSectionComponent, RoutesSectionComponent, HealthSectionComponent, EnvironmentSectionComponent, ContributeSectionComponent, AboutSectionComponent]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(MapViewerComponent) mapViewer!: MapViewerComponent;

  // Datos para las rutas (3 tarjetas idénticas como en el original)
  routes: RouteData[] = [
    {
      id: 'simon-bolivar',
      name: 'Ruta Parque Simón Bolívar',
      description: 'El "pulmón verde" de Bogotá. Ideal para trotar, montar en bici, pícnics y grandes eventos.',
      address: 'Calle 63 #48-17 (Localidad de Teusaquillo)',
      activities: 'Caminata y Bicicleta (Pista de trote y ciclopaseo natural)',
      type: 'Parque metropolitano',
      imageUrl: 'assets/img/ParqueMetropolitanoSimonBolivar.jpg'
    },
    {
      id: 'simon-bolivar',
      name: 'Ruta Parque Simón Bolívar',
      description: 'El "pulmón verde" de Bogotá. Ideal para trotar, montar en bici, pícnics y grandes eventos.',
      address: 'Calle 63 #48-17 (Localidad de Teusaquillo)',
      activities: 'Caminata y Bicicleta (Pista de trote y ciclopaseo natural)',
      type: 'Parque metropolitano',
      imageUrl: 'assets/img/ParqueMetropolitanoSimonBolivar.jpg'
    },
    {
      id: 'simon-bolivar',
      name: 'Ruta Parque Simón Bolívar',
      description: 'El "pulmón verde" de Bogotá. Ideal para trotar, montar en bici, pícnics y grandes eventos.',
      address: 'Calle 63 #48-17 (Localidad de Teusaquillo)',
      activities: 'Caminata y Bicicleta (Pista de trote y ciclopaseo natural)',
      type: 'Parque metropolitano',
      imageUrl: 'assets/img/ParqueMetropolitanoSimonBolivar.jpg'
    }
  ];

  // Datos para el mapa
  bogotaLocation = {
    lat: 4.60971,
    lng: -74.08175,
    zoom: 11
  };

  simonBolivarMarker = {
    lat: 4.658383,
    lng: -74.093940,
    name: 'Parque Metropolitano Simón Bolívar',
    description: 'El "pulmón verde" de Bogotá. Ideal para trotar, montar en bici, pícnics y eventos.',
    address: 'Calle 63 #48-17, Teusaquillo',
    activities: 'Caminata, bicicleta, pícnics',
    type: 'Parque metropolitano',
    zoom: 15
  };

  ngAfterViewInit(): void {
    // Asegurar que el mapa se inicialice correctamente
    setTimeout(() => {
      // Inicialización adicional si es necesaria
    }, 100);
  }

  showCity(): void {
    if (this.mapViewer) {
      this.mapViewer.showCity(this.bogotaLocation);
    }
  }

  showRoute(routeId: string): void {
    if (this.mapViewer && routeId === 'simon-bolivar') {
      this.mapViewer.showRoute(this.simonBolivarMarker);
    }
  }
}