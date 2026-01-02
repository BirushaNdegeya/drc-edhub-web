import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CourseCardComponent, CourseCardData } from '../../courses/course-card/course-card.component';

@Component({
  selector: 'app-courses-section',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, CourseCardComponent],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent {
  sampleCourses: CourseCardData[] = [
    {
      id: '1',
      title: 'Introduction à l\'Informatique',
      description: 'Apprenez les fondamentaux de la programmation et de la pensée computationnelle avec des exercices pratiques.',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      level: 'beginner',
      duration: '8 semaines',
      students: 1250,
      school: 'Université de Kinshasa',
      category: 'Technologie',
    },
    {
      id: '2',
      title: 'Fondamentaux de la Gestion d\'Entreprise',
      description: 'Maîtrisez les compétences essentielles en affaires, de la planification à l\'exécution pour les entrepreneurs en herbe.',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      level: 'intermediate',
      duration: '6 semaines',
      students: 890,
      school: 'École Supérieure de Commerce',
      category: 'Business',
    },
    {
      id: '3',
      title: 'Mathématiques Avancées',
      description: 'Plongez dans le calcul, les statistiques et les concepts mathématiques avancés pour les étudiants STEM.',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      level: 'advanced',
      duration: '12 semaines',
      students: 456,
      school: 'Institut Supérieur Pédagogique',
      category: 'Science',
    },
  ];
}
