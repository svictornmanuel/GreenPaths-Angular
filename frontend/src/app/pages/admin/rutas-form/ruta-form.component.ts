import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomButtonComponent } from '../../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-admin-ruta-form',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButtonComponent],
  templateUrl: './ruta-form.html',
  styleUrls: ['./ruta-form.css'],
})
export class AdminRutaFormComponent implements OnInit {
  isEdit = false;
  ruta = {
    nombre: '',
    descripcion: '',
    ubicacion: '',
    lat: '',
    lng: '',
    fotos: [] as string[],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEdit = true;
        // Simular carga de datos para edición
        this.ruta = {
          nombre: 'Parque Simón Bolívar',
          descripcion:
            'El "pulmón verde" de Bogotá. Ideal para trotar, montar en bici, pícnics y eventos.',
          ubicacion: 'Calle 63 #48-17, Teusaquillo',
          lat: '4.658383',
          lng: '-74.093940',
          fotos: [],
        };
      }
    });
  }

  onSaveDraft() {
    console.log('Guardar borrador', this.ruta);
    // Lógica para guardar como borrador
  }

  onPublish() {
    console.log('Publicar ruta', this.ruta);
    // Lógica para publicar
  }

  onCancel() {
    if (confirm('¿Descartar cambios?')) {
      this.router.navigate(['/admin/rutas']);
    }
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    console.log('Archivos seleccionados:', files);
    // Aquí se manejaría la subida de archivos
  }
}
