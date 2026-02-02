import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-contribute-section',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CustomButtonComponent
  ],
  templateUrl: './contribute-section.component.html',
  styleUrls: ['./contribute-section.component.css']
})
export class ContributeSectionComponent {
  // Datos del formulario
  formData = {
    name: '',
    email: '',
    address: '',
    details: ''
  };

  // Estados de validación
  errors = {
    name: '',
    email: '',
    address: '',
    details: ''
  };

  formStatus = {
    message: '',
    type: '' // valid o invalid
  };

  // Expresiones regulare
  regexPatterns = {
    name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    address: /^[\w\sáéíóúÁÉÍÓÚñÑ\d.,#\-°()]{10,200}$/,
    details: /^[\w\sáéíóúÁÉÍÓÚñÑ\d.,;:\-!?¡¿()]{20,500}$/
  };

  errorMessages = {
    name: "El nombre debe contener solo letras y espacios (2-50 caracteres)",
    email: "Introduce un email válido (ejemplo: usuario@dominio.com)",
    address: "La dirección debe tener entre 10 y 200 caracteres",
    details: "Los detalles deben tener entre 20 y 500 caracteres"
  };

  validateField(field: keyof typeof this.formData, value: string): boolean {
    const regex = this.regexPatterns[field];
    
    if (!value.trim()) {
      this.errors[field] = '';
      return false;
    }
    
    const isValid = regex.test(value.trim());
    
    if (!isValid) {
      this.errors[field] = this.errorMessages[field];
    } else {
      this.errors[field] = '';
    }
    
    return isValid;
  }

  onSubmit(): void {
    // Valida los campos
    const isNameValid = this.validateField('name', this.formData.name);
    const isEmailValid = this.validateField('email', this.formData.email);
    const isAddressValid = this.validateField('address', this.formData.address);
    const isDetailsValid = this.validateField('details', this.formData.details);

    if (isNameValid && isEmailValid && isAddressValid && isDetailsValid) {
      // Simular envío
      this.formStatus = {
        message: 'Enviando su contribución al servidor...',
        type: 'valid'
      };

      setTimeout(() => {
        this.formStatus = {
          message: '¡Gracias por su contribución! Hemos recibido su sugerencia de ruta verde.',
          type: 'valid'
        };

        // Limpiar formulario (después de 3 segundos)
        setTimeout(() => {
          this.formData = { name: '', email: '', address: '', details: '' };
          this.formStatus = { message: '', type: '' };
          this.errors = { name: '', email: '', address: '', details: '' };
        }, 3000);
      }, 1500);
    } else {
      this.formStatus = {
        message: 'Por favor, corrija los errores en los campos marcados antes de enviar.',
        type: 'invalid'
      };
    }
  }
}