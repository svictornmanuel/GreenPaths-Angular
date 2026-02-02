import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

export interface MapLocation {
  lat: number;
  lng: number;
  zoom: number;
}

export interface RouteMarker {
  lat: number;
  lng: number;
  name: string;
  description: string;
  address: string;
  activities: string;
  type: string;
  zoom: number;
}

@Component({
  selector: 'app-map-viewer',
  standalone: true,
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css']
})
export class MapViewerComponent implements AfterViewInit {
  @Input() initialLocation: MapLocation = { lat: 4.60971, lng: -74.08175, zoom: 12 };
  @Input() showRouteMarker: boolean = false;
  @Input() routeMarker?: RouteMarker;
  @Output() mapInitialized = new EventEmitter<L.Map>();

  private map!: L.Map;
  private marker: L.Marker | null = null;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.map = L.map('map').setView(
      [this.initialLocation.lat, this.initialLocation.lng], 
      this.initialLocation.zoom
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 20
    }).addTo(this.map);

    this.mapInitialized.emit(this.map);

    if (this.showRouteMarker && this.routeMarker) {
      this.addRouteMarker(this.routeMarker);
    }
  }

  showCity(location: MapLocation): void {
    if (this.map) {
      this.map.setView([location.lat, location.lng], location.zoom);
      this.removeMarker();
    }
  }

  showRoute(route: RouteMarker): void {
    if (this.map) {
      this.map.setView([route.lat, route.lng], route.zoom);
      this.addRouteMarker(route);
    }
  }

  private addRouteMarker(route: RouteMarker): void {
    this.removeMarker();
    
    this.marker = L.marker([route.lat, route.lng], {
      title: route.name,
      alt: route.name
    }).addTo(this.map);

    this.marker.bindPopup(`
      <div style="max-width: 250px;">
        <h4 style="margin: 0 0 8px 0; color: rgb(97, 186, 75);">${route.name}</h4>
        <p style="margin: 0 0 10px 0; color: rgb(0, 0, 0);">${route.description}</p>
        <div style="font-size: 0.9em; color: rgb(0, 0, 0);">
          <strong>Dirección:</strong> ${route.address}<br>
          <strong>Actividades:</strong> ${route.activities}<br>
          <strong>Tipo:</strong> ${route.type}
        </div>
      </div>
    `).openPopup();
  }

  private removeMarker(): void {
    if (this.marker) {
      this.map.removeLayer(this.marker);
      this.marker = null;
    }
  }
}