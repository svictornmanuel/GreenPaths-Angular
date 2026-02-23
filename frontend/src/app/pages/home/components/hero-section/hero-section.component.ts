import { Component, Output, EventEmitter } from '@angular/core';
import { MapViewerComponent } from "../../../../components/ui/map-viewer/map-viewer.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  imports: [MapViewerComponent]
})
export class HeroSectionComponent {
  @Output() discoverRoutes = new EventEmitter<void>();

  onDiscoverRoutes(): void {
    this.discoverRoutes.emit();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}