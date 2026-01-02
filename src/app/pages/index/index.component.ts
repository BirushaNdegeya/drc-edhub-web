import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { HeroSectionComponent } from '../../components/landing/hero-section/hero-section.component';
import { FeaturesSectionComponent } from '../../components/landing/features-section/features-section.component';
import { CoursesSectionComponent } from '../../components/landing/courses-section/courses-section.component';
import { ForSchoolsSectionComponent } from '../../components/landing/for-schools-section/for-schools-section.component';
import { CtaSectionComponent } from '../../components/landing/cta-section/cta-section.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    CoursesSectionComponent,
    ForSchoolsSectionComponent,
    CtaSectionComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
}
