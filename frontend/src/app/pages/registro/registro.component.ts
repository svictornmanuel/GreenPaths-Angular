import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CustomButtonComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  user = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    terminos: false,
  };

  onSubmit() {
    console.log('Registro enviado', this.user);
    // Aquí irá la lógica de registro real
  }
}
