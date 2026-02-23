import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapService, RouteLocation } from '../../../core/services/map.service';
import { Subscription } from 'rxjs';

// Solución para los iconos de Leaflet (ajusta las rutas según tu carpeta assets)
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/img/marker-icon-2x.png';
const iconUrl = 'assets/img/marker-icon.png';
const shadowUrl = 'assets/img/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map-viewer',
  standalone: true,
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css']
})
export class MapViewerComponent implements OnInit, OnDestroy {
  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    console.log('MapViewer: ngOnInit');
    this.initMap();
    this.subscription.add(
      this.mapService.showRoute$.subscribe(route => {
        console.log('MapViewer: evento recibido', route);
        this.showRouteOnMap(route);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.map) {
      this.map.remove();
    }
  }

  private initMap(): void {
    console.log('MapViewer: initMap');

    // Coordenadas iniciales (Bogotá)
    const initialLat = 4.60971;
    const initialLng = -74.08175;
    const initialZoom = 12;

    this.map = L.map('map').setView([initialLat, initialLng], initialZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 20
    }).addTo(this.map);
  }

  private showRouteOnMap(route: RouteLocation): void {
    console.log('MapViewer: showRouteOnMap', route);
    
    if (!this.map) return;

    // Centrar el mapa en la ubicación de la ruta
    this.map.setView([route.lat, route.lng], route.zoom);

    // Eliminar marcador anterior si existe
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }

    // Crear nuevo marcador
    this.marker = L.marker([route.lat, route.lng], {
      title: route.nombre,
      alt: route.nombre
    }).addTo(this.map);

    // Popup con información
    this.marker.bindPopup(`
      <div style="max-width: 250px;">
        <h4 style="margin: 0 0 8px 0; color: rgb(97, 186, 75);">${route.nombre}</h4>
        <p style="margin: 0 0 10px 0; color: rgb(0, 0, 0);">${route.descripcion}</p>
        <div style="font-size: 0.9em; color: rgb(0, 0, 0);">
          <strong>Dirección:</strong> ${route.direccion}<br>
          <strong>Tipo:</strong> ${route.tipo}
        </div>
      </div>
    `).openPopup();
  }
}