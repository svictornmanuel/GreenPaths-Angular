import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-admin-rutas',
  standalone: true,
  imports: [CommonModule, RouterLink, CustomButtonComponent],
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css'],
})
export class AdminRutasComponent {
  rutas = [
    {
      id: 1,
      nombre: 'Parque Simón Bolívar',
      creador: 'Admin',
      fecha: '2024-01-15',
      estado: 'Publicado',
    },
    {
      id: 2,
      nombre: 'Quebrada La Vieja',
      creador: 'Usuario1',
      fecha: '2024-02-10',
      estado: 'Borrador',
    },
    {
      id: 3,
      nombre: 'Cerro de Monserrate',
      creador: 'Admin',
      fecha: '2024-01-20',
      estado: 'Publicado',
    },
    {
      id: 4,
      nombre: 'Chicaque',
      creador: 'Usuario2',
      fecha: '2024-03-05',
      estado: 'Borrador',
    },
  ];

  onEdit(id: number) {
    console.log('Editar ruta', id);
    // Navegar a /admin/rutas/editar/id
  }

  onDelete(id: number) {
    if (confirm('¿Estás seguro de eliminar esta ruta?')) {
      console.log('Eliminar ruta', id);
    }
  }

  onView(id: number) {
    console.log('Ver ruta', id);
    // Podría navegar a la vista pública de la ruta
  }
}
