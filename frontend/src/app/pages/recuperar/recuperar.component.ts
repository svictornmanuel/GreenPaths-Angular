import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CustomButtonComponent],
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css'],
})
export class RecuperarComponent {
  email = '';
  submitted = false;

  onSubmit() {
    console.log('Solicitud de recuperación para:', this.email);
    this.submitted = true;
    // Aquí iría la lógica real
  }
}
