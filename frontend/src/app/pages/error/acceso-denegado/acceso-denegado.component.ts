import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acceso-denegado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="error-container">
      <h1>403</h1>
      <h2>Acceso denegado</h2>
      <p>No tienes permisos para ver esta página.</p>
      <a routerLink="/" class="btn-home">Volver al inicio</a>
    </div>
  `,
  styles: [
    `
      .error-container {
        text-align: center;
        padding: 100px 20px;
        max-width: 600px;
        margin: 0 auto;
      }
      h1 {
        font-size: 120px;
        margin: 0;
        color: #f44336;
      }
      h2 {
        font-size: 32px;
        margin: 10px 0;
        color: #333;
      }
      p {
        color: #666;
        margin-bottom: 30px;
      }
      .btn-home {
        display: inline-block;
        padding: 12px 30px;
        background: #4caf50;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
      }
      .btn-home:hover {
        background: #45a049;
      }
    `,
  ],
})
export class AccesoDenegadoComponent {}
