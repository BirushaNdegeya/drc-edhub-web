import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CourseCardComponent, CourseCardData } from '../../components/courses/course-card/course-card.component';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    CourseCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  enrolledCourses = signal<CourseCardData[]>([]);
  loading = signal(true);

  constructor(
    private courseService: CourseService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.loadEnrolledCourses();
    }
  }

  loadEnrolledCourses(): void {
    this.loading.set(true);
    this.courseService.getEnrolledCourses().subscribe({
      next: (courses) => {
        this.enrolledCourses.set(courses);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load enrolled courses', err);
        this.loading.set(false);
      }
    });
  }

  get totalCourses(): number {
    return this.enrolledCourses().length;
  }

  get averageProgress(): number {
    const courses = this.enrolledCourses();
    if (courses.length === 0) return 0;
    const totalProgress = courses.reduce((sum, course) => sum + (course.progress || 0), 0);
    return Math.round(totalProgress / courses.length);
  }

  get completedCourses(): number {
    return this.enrolledCourses().filter(course => (course.progress || 0) === 100).length;
  }

  get inProgressCourses(): number {
    return this.enrolledCourses().filter(course => {
      const progress = course.progress || 0;
      return progress > 0 && progress < 100;
    }).length;
  }
}
