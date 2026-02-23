import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

// Exporta la interfaz
export interface RouteData {
  id: string;
  name: string;
  description: string;
  address: string;
  activities: string;
  type: string;
  imageUrl: string;
}

@Component({
  selector: 'app-route-card',
  standalone: true,
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css'],
})
export class RouteCardComponent {
  @Input() route!: RouteData;
  @Output() viewRoute = new EventEmitter<string>();

  onViewRoute(): void {
    console.log('RouteCard: emitir viewRoute con id', this.route.id);
    this.viewRoute.emit(this.route.id);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
