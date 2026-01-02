import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Authentification en cours...</p>
      </div>
    </div>
  `
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // The backend redirects to /auth/google/callback and returns the token
    // We need to extract it from the response
    this.authService.handleGoogleCallback().subscribe({
      next: () => {
        // Navigation is handled in the service
      },
      error: (error) => {
        console.error('Authentication error:', error);
        this.router.navigate(['/login']);
      }
    });
  }
}

