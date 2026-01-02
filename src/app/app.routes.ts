import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/index/index.component').then(m => m.IndexComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'course/:id',
    loadComponent: () => import('./pages/course-detail/course-detail.component').then(m => m.CourseDetailComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'add-school',
    loadComponent: () => import('./pages/add-school/add-school.component').then(m => m.AddSchoolComponent)
  },
  {
    path: 'schools',
    loadComponent: () => import('./pages/schools/schools.component').then(m => m.SchoolsComponent)
  },
  {
    path: 'journals',
    loadComponent: () => import('./pages/journals/journals.component').then(m => m.JournalsComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./pages/exam-test/exam-test.component').then(m => m.ExamTestComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
