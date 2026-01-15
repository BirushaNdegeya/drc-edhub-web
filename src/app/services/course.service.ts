import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { CourseCardData } from '../components/courses/course-card/course-card.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly API_URL = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Get enrolled courses for the current user
   * TODO: Replace with actual API endpoint when available
   * Expected endpoint: GET /users/me/courses or GET /courses/enrolled
   */
  getEnrolledCourses(): Observable<CourseCardData[]> {
    // Mock data for enrolled courses with progress
    // Replace this with actual API call: return this.http.get<CourseCardData[]>(`${this.API_URL}/users/me/courses`);
    const mockEnrolledCourses: CourseCardData[] = [
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
        progress: 45
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
        progress: 78
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
        progress: 23
      }
    ];

    return of(mockEnrolledCourses).pipe(delay(300));
  }
}
