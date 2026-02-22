import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButtonComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  userInfo = {
    nombre: 'Usuario Ejemplo',
    email: 'usuario@example.com',
    foto: 'assets/img/default-profile.png',
  };

  passwordData = {
    actual: '',
    nueva: '',
    confirmar: '',
  };

  onSaveInfo() {
    console.log('Guardar información', this.userInfo);
  }

  onChangePassword() {
    console.log('Cambiar contraseña', this.passwordData);
  }
}
