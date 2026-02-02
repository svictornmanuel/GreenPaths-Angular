import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteCardComponent, RouteData } from '../../../../components/ui/route-card/route-card.component';

@Component({
  selector: 'app-routes-section',
  standalone: true,
  templateUrl: './routes-section.component.html',
  styleUrls: ['./routes-section.component.css'],
  imports: [CommonModule, RouteCardComponent]
})
export class RoutesSectionComponent {
  @Input() routes: RouteData[] = [];
  @Output() viewRoute = new EventEmitter<string>();

  onViewRoute(routeId: string): void {
    this.viewRoute.emit(routeId);
  }
}