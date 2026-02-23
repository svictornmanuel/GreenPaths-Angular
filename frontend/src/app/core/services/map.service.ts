import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface RouteLocation {
    id: string;                // Identificador único (coincide con el de las tarjetas)
    lat: number;
    lng: number;
    nombre: string;
    descripcion: string;
    direccion: string;
    actividades: string;
    tipo: string;
    zoom: number;
}

@Injectable({
    providedIn: 'root'
})
export class MapService {
    private showRouteSource = new Subject<RouteLocation>();
    showRoute$ = this.showRouteSource.asObservable();

    // Base de datos de rutas (puede venir de una API más adelante)
    private rutas: { [key: string]: RouteLocation } = {
        'simon-bolivar': {
        id: 'simon-bolivar',
        lat: 4.658383,
        lng: -74.093940,
        nombre: 'Parque Metropolitano Simón Bolívar',
        descripcion: "El 'pulmón verde' de Bogotá. Ideal para trotar, montar en bici, pícnics y eventos.",
        direccion: 'Calle 63 #48-17, Teusaquillo',
        actividades: 'Caminata, bicicleta, pícnics',
        tipo: 'Parque metropolitano',
        zoom: 15
        }
        // Agrega aquí más rutas con su respectivo id
    };

    getRoute(routeId: string): RouteLocation | undefined {
        return this.rutas[routeId];
    }

    showRoute(routeId: string): void {
    console.log('MapService: showRoute llamado con id:', routeId);
    const route = this.getRoute(routeId);
    if (route) {
        console.log('MapService: ruta encontrada', route);
        this.showRouteSource.next(route);
    } else {
        console.log('MapService: ruta no encontrada para id:', routeId);
    }
    }
}