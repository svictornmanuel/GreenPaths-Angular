import { Component, Output, EventEmitter } from '@angular/core';
import { CustomButtonComponent } from "../../../../components/ui/custom-button/custom-button.component";
import { MapViewerComponent } from "../../../../components/ui/map-viewer/map-viewer.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  imports: [CustomButtonComponent, MapViewerComponent]
})
export class HeroSectionComponent {
  @Output() discoverRoutes = new EventEmitter<void>();

  onDiscoverRoutes(): void {
    this.discoverRoutes.emit();
  }
}