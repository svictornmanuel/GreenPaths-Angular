import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CustomButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
    remember: false,
  };

  onSubmit() {
    console.log('Login intentado', this.credentials);
    // Aquí irá la lógica de autenticación
  }
}
