import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface School {
  id: string;
  name: string;
  description: string | null;
  logo_url: string | null;
  is_approved: boolean;
}

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {
  loading = signal(false);
  user = signal<any>(null); // Mock user

  schools: School[] = [
    {
      id: '1',
      name: 'Université de Kinshasa',
      description: 'Institution d\'enseignement supérieur de référence en RDC, offrant une formation de qualité dans diverses disciplines.',
      logo_url: null,
      is_approved: true
    },
    {
      id: '2',
      name: 'École Supérieure de Commerce',
      description: 'Établissement spécialisé dans la formation en commerce et gestion d\'entreprise.',
      logo_url: null,
      is_approved: true
    },
    {
      id: '3',
      name: 'Institut Supérieur Pédagogique',
      description: 'Formation d\'enseignants et d\'éducateurs pour le système éducatif congolais.',
      logo_url: null,
      is_approved: true
    },
    {
      id: '4',
      name: 'Business Academy Kinshasa',
      description: 'Académie moderne axée sur l\'entrepreneuriat et les compétences business.',
      logo_url: null,
      is_approved: true
    },
    {
      id: '5',
      name: 'Alliance Française Lubumbashi',
      description: 'Centre de formation linguistique et culturel français en RDC.',
      logo_url: null,
      is_approved: true
    },
    {
      id: '6',
      name: 'École de Santé Publique',
      description: 'Formation spécialisée dans le domaine de la santé publique et médicale.',
      logo_url: null,
      is_approved: true
    },
  ];
}