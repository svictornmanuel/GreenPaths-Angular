import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // Esta variable controla si el menú se muestra o no
  isMenuOpen = false;

  // Esta función cambia el estado (de true a false y viceversa)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
