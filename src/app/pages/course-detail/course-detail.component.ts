import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz' | 'file';
  duration: string;
  completed: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  level: 'primaire' | 'secondaire' | 'universitaire';
  duration: string;
  students: number;
  school: string;
  category: string;
  instructor: string;
  language: string;
  lastUpdated: string;
  modules: Module[];
  whatYouWillLearn: string[];
  requirements: string[];
}

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatListModule
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  courseId: string | null = null;
  enrolled = signal(false);
  selectedSession = signal<'morning' | 'afternoon' | 'evening'>('morning');

  courseData: CourseData = {
    id: '2',
    title: 'Introduction à l\'Informatique',
    description: 'Apprenez les fondamentaux de la programmation et de la pensée computationnelle avec des exercices pratiques. Ce cours complet couvre tout, des algorithmes de base aux structures de données, vous préparant à une carrière dans la technologie.',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    level: 'primaire',
    duration: '8 semaines',
    students: 1250,
    school: 'Université de Kinshasa',
    category: 'Technologie',
    instructor: 'Prof. Jean-Pierre Mbeki',
    language: 'Français',
    lastUpdated: 'Décembre 2024',
    modules: [
      {
        id: 'm1',
        title: 'Commencer avec la Programmation',
        lessons: [
          { id: 'l1', title: 'Qu\'est-ce que l\'Informatique ?', type: 'video', duration: '15 min', completed: true },
          { id: 'l2', title: 'Configuration de votre Environnement', type: 'video', duration: '20 min', completed: true },
          { id: 'l3', title: 'Votre Premier Programme', type: 'text', duration: '10 min', completed: false },
          { id: 'l4', title: 'Quiz du Module 1', type: 'quiz', duration: '15 min', completed: false },
        ],
      },
      {
        id: 'm2',
        title: 'Variables et Types de Données',
        lessons: [
          { id: 'l5', title: 'Comprendre les Variables', type: 'video', duration: '25 min', completed: false },
          { id: 'l6', title: 'Travailler avec les Nombres', type: 'video', duration: '20 min', completed: false },
          { id: 'l7', title: 'Chaînes de Caractères et Texte', type: 'text', duration: '15 min', completed: false },
          { id: 'l8', title: 'Exercices Pratiques', type: 'file', duration: '30 min', completed: false },
        ],
      },
      {
        id: 'm3',
        title: 'Structures de Contrôle',
        lessons: [
          { id: 'l9', title: 'Instructions Conditionnelles', type: 'video', duration: '30 min', completed: false },
          { id: 'l10', title: 'Boucles et Itérations', type: 'video', duration: '25 min', completed: false },
          { id: 'l11', title: 'Quiz du Module 3', type: 'quiz', duration: '20 min', completed: false },
        ],
      },
    ],
    whatYouWillLearn: [
      'Comprendre les concepts fondamentaux de la programmation',
      'Écrire vos premiers programmes en Python',
      'Travailler avec des variables, boucles et fonctions',
      'Déboguer et résoudre les problèmes de programmation courants',
      'Construire de petits projets pour appliquer vos connaissances',
    ],
    requirements: [
      'Aucune expérience en programmation requise',
      'Un ordinateur avec accès Internet',
      'Volonté d\'apprendre et de pratiquer',
    ],
  };

  constructor(private route: ActivatedRoute) {
    this.courseId = this.route.snapshot.paramMap.get('id');
    // Load course data based on ID (mock for now)
  }

  get completedLessons() {
    return this.courseData.modules.flatMap(m => m.lessons).filter(l => l.completed).length;
  }

  get totalLessons() {
    return this.courseData.modules.flatMap(m => m.lessons).length;
  }

  get progress() {
    return Math.round((this.completedLessons / this.totalLessons) * 100);
  }

  getLevelLabel(level: string): string {
    const labels: Record<string, string> = {
      primaire: 'Primaire',
      secondaire: 'Secondaire',
      universitaire: 'Universitaire'
    };
    return labels[level] || level;
  }

  getLessonIcon(type: string): string {
    switch (type) {
      case 'video': return 'play_circle';
      case 'text': return 'description';
      case 'quiz': return 'quiz';
      case 'file': return 'download';
      default: return 'menu_book';
    }
  }

  enroll() {
    this.enrolled.set(true);
  }

  startLesson(lesson: Lesson) {
    console.log('Starting lesson:', lesson.title);
    // Navigate to lesson content
  }

  selectSession(session: 'morning' | 'afternoon' | 'evening') {
    this.selectedSession.set(session);
  }
}