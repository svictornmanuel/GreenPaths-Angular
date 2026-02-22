import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-restablecer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CustomButtonComponent],
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.css'],
})
export class RestablecerComponent implements OnInit {
  token = '';
  passwords = {
    nueva: '',
    confirmar: '',
  };
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.token = params['token'];
      console.log('Token de restablecimiento:', this.token);
    });
  }

  onSubmit() {
    console.log('Nueva contraseña para token', this.token, this.passwords);
    this.submitted = true;
    // Aquí iría la lógica real
    setTimeout(() => this.router.navigate(['/login']), 3000);
  }
}
