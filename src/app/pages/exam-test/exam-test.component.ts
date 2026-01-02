import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';

interface ExamSection {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  questions: number;
  duration: string;
  difficulty: string;
  icon: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-exam-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule
  ],
  templateUrl: './exam-test.component.html',
  styleUrl: './exam-test.component.css'
})
export class ExamTestComponent {
  selectedCategory = signal<string | null>(null);
  searchQuery = signal('');

  stats: Stat[] = [
    { label: 'Tests disponibles', value: '150+', icon: 'quiz' },
    { label: 'Questions', value: '2,500+', icon: 'menu_book' },
    { label: 'Étudiants', value: '5,000+', icon: 'emoji_events' },
  ];

  examSections: ExamSection[] = [
    {
      id: 'pedagogie',
      name: 'Pédagogie',
      description: 'Section Pédagogie Générale - Formation des enseignants et éducateurs',
      subjects: ['Psychologie', 'Didactique', 'Pédagogie Générale', 'Français', 'Mathématiques'],
      questions: 120,
      duration: '4h00',
      difficulty: 'Moyen',
      icon: '📚'
    },
    {
      id: 'technique-sociale',
      name: 'Technique Sociale',
      description: 'Section Technique Sociale - Sciences sociales et communication',
      subjects: ['Sociologie', 'Psychologie', 'Économie', 'Droit', 'Communication'],
      questions: 100,
      duration: '4h00',
      difficulty: 'Moyen',
      icon: '🤝'
    },
    {
      id: 'scientifique',
      name: 'Scientifique',
      description: 'Section Scientifique - Math-Physique, Biologie-Chimie',
      subjects: ['Mathématiques', 'Physique', 'Chimie', 'Biologie', 'Sciences de la Vie'],
      questions: 150,
      duration: '5h00',
      difficulty: 'Difficile',
      icon: '🔬'
    },
    {
      id: 'commerciale',
      name: 'Commerciale & Gestion',
      description: 'Section Commerciale - Comptabilité, gestion et économie',
      subjects: ['Comptabilité', 'Économie', 'Mathématiques Financières', 'Gestion', 'Droit Commercial'],
      questions: 110,
      duration: '4h00',
      difficulty: 'Moyen',
      icon: '💼'
    },
    {
      id: 'litteraire',
      name: 'Littéraire',
      description: 'Section Littéraire - Langues, histoire et philosophie',
      subjects: ['Français', 'Anglais', 'Histoire', 'Géographie', 'Philosophie'],
      questions: 100,
      duration: '4h00',
      difficulty: 'Moyen',
      icon: '📖'
    },
    {
      id: 'technique-industrielle',
      name: 'Technique Industrielle',
      description: 'Section Technique - Électricité, mécanique et construction',
      subjects: ['Électricité', 'Mécanique', 'Dessin Technique', 'Mathématiques', 'Physique'],
      questions: 130,
      duration: '5h00',
      difficulty: 'Difficile',
      icon: '⚙️'
    }
  ];

  get filteredSections() {
    const query = this.searchQuery().toLowerCase();
    if (!query) {
      return this.examSections;
    }
    return this.examSections.filter(section =>
      section.name.toLowerCase().includes(query) ||
      section.description.toLowerCase().includes(query) ||
      section.subjects.some(subject => subject.toLowerCase().includes(query))
    );
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Facile':
        return 'primary';
      case 'Moyen':
        return 'accent';
      case 'Difficile':
        return 'warn';
      default:
        return '';
    }
  }

  selectCategory(id: string) {
    this.selectedCategory.set(this.selectedCategory() === id ? null : id);
  }

  startExam(section: ExamSection) {
    console.log('Starting exam:', section.name);
  }
}