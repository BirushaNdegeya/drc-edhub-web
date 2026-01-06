import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import {
  CourseCardComponent,
  CourseCardData,
} from '../../components/courses/course-card/course-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  searchQuery = signal('');
  selectedCategory = signal('Tous');
  selectedLevel = signal('Tous Niveaux');

  categories = [
    'Tous',
    'Technologie',
    'Business',
    'Science',
    'Marketing',
    'Langues',
    'Santé',
  ];
  levels = ['Tous Niveaux', 'Primaire', 'Secondaire', 'Universitaire'];

  allCourses: CourseCardData[] = [
    {
      id: '1',
      title: "Introduction à l'Informatique",
      description:
        'Apprenez les fondamentaux de la programmation et de la pensée computationnelle avec des exercices pratiques.',
      thumbnail:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      level: 'primaire',
      duration: '8 semaines',
      students: 1250,
      school: 'Université de Kinshasa',
      category: 'Technologie',
    },
    {
      id: '2',
      title: "Fondamentaux de la Gestion d'Entreprise",
      description:
        "Maîtrisez les compétences essentielles en affaires, de la planification à l'exécution.",
      thumbnail:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      level: 'secondaire',
      duration: '6 semaines',
      students: 890,
      school: 'École Supérieure de Commerce',
      category: 'Business',
    },
    {
      id: '3',
      title: 'Mathématiques Avancées',
      description:
        'Plongez dans le calcul, les statistiques et les concepts mathématiques avancés.',
      thumbnail:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      level: 'universitaire',
      duration: '12 semaines',
      students: 456,
      school: 'Institut Supérieur Pédagogique',
      category: 'Science',
    },
    {
      id: '4',
      title: 'Marketing Digital Essentiel',
      description:
        'Apprenez à créer des campagnes marketing efficaces avec les réseaux sociaux et outils numériques.',
      thumbnail:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      level: 'secondaire',
      duration: '4 semaines',
      students: 2100,
      school: 'Business Academy Kinshasa',
      category: 'Marketing',
    },
    {
      id: '5',
      title: 'Maîtrise du Français',
      description:
        'Améliorez vos compétences en communication française pour le succès académique et professionnel.',
      thumbnail:
        'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&h=400&fit=crop',
      level: 'primaire',
      duration: '10 semaines',
      students: 780,
      school: 'Alliance Française Lubumbashi',
      category: 'Langues',
    },
    {
      id: '6',
      title: 'Fondamentaux de la Santé',
      description:
        'Introduction aux systèmes de santé, soins aux patients et terminologie médicale.',
      thumbnail:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      level: 'universitaire',
      duration: '8 semaines',
      students: 540,
      school: 'École de Santé Publique',
      category: 'Santé',
    },
  ];

  get filteredCourses() {
    const query = this.searchQuery().toLowerCase();
    const category = this.selectedCategory();
    const level = this.selectedLevel();

    const levelMap: Record<string, string> = {
      Primaire: 'primaire',
      Secondaire: 'secondaire',
      Universitaire: 'universitaire',
    };

    return this.allCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query);
      const matchesCategory =
        category === 'Tous' || course.category === category;
      const matchesLevel =
        level === 'Tous Niveaux' || course.level === levelMap[level];
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }
  levelMap: Record<string, string> = {
    Primaire: 'primaire',
    Secondaire: 'secondaire',
    Universitaire: 'universitaire',
  };
  clearFilters() {
    this.searchQuery.set('');
    this.selectedCategory.set('Tous');
    this.selectedLevel.set('Tous Niveaux');
  }

  get hasActiveFilters() {
    return (
      this.searchQuery() ||
      this.selectedCategory() !== 'Tous' ||
      this.selectedLevel() !== 'Tous Niveaux'
    );
  }
}
