import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export interface CourseCardData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  level: 'primaire' | 'secondaire' | 'universitaire';
  duration: string;
  students: number;
  school: string;
  category: string;
  progress?: number;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: CourseCardData;

  getLevelLabel(level: string): string {
    const labels: Record<string, string> = {
      primaire: 'Primaire',
      secondaire: 'Secondaire',
      universitaire: 'Universitaire'
    };
    return labels[level] || level;
  }

  getLevelColor(level: string): string {
    const colors: Record<string, string> = {
      primaire: 'primary',
      secondaire: 'accent',
      universitaire: 'warn'
    };
    return colors[level] || 'primary';
  }
}
