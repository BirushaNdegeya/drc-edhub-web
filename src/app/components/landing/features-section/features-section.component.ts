import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css'
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    {
      icon: 'school',
      title: 'Écoles Multi-Tenant',
      description: 'Chaque école dispose de son propre espace personnalisé pour gérer cours, enseignants et étudiants de manière indépendante.',
    },
    {
      icon: 'people',
      title: 'Sessions Flexibles',
      description: 'Sessions du matin, après-midi et soir adaptées aux habitudes et horaires d\'apprentissage locaux en RDC.',
    },
    {
      icon: 'menu_book',
      title: 'Contenu Riche',
      description: 'Vidéos YouTube, leçons textuelles, téléchargements PDF et quiz interactifs pour un apprentissage complet.',
    },
    {
      icon: 'emoji_events',
      title: 'Certificats',
      description: 'Génération automatique de certificats à la fin des cours pour valider les accomplissements des étudiants.',
    },
    {
      icon: 'schedule',
      title: 'Suivi de Progression',
      description: 'Suivi en temps réel de la progression des étudiants, scores aux quiz et achèvement global des cours.',
    },
    {
      icon: 'security',
      title: 'Accès Basé sur les Rôles',
      description: 'Plateforme sécurisée avec rôles Super Admin, Admin École, Enseignant et Étudiant.',
    },
  ];
}
