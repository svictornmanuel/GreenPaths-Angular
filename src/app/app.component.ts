import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroSection } from './features/home/components/hero-section/hero-section';
import { RoutesSection } from './features/home/components/routes-section/routes-section';
import { HealthSection } from './features/home/components/health-section/health-section';
import { EnvironmentSection } from './features/home/components/environment-section/environment-section';
import { ContributeSection } from './features/home/components/contribute-section/contribute-section';
import { AboutSection } from './features/home/components/about-section/about-section';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSection,
    RoutesSection,
    HealthSection,
    EnvironmentSection,
    ContributeSection,
    AboutSection,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
