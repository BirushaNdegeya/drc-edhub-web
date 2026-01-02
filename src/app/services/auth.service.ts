import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { API_CONFIG } from '../config/api.config';

export interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = API_CONFIG.baseUrl;
  private readonly TOKEN_KEY = 'access_token';
  
  isAuthenticated = signal<boolean>(false);
  token = signal<string | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Check for existing token on service initialization
    if (isPlatformBrowser(this.platformId)) {
      const storedToken = this.getStoredToken();
      if (storedToken) {
        this.token.set(storedToken);
        this.isAuthenticated.set(true);
      }
    }
  }

  /**
   * Start Google OAuth flow by redirecting to backend
   */
  loginWithGoogle(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `${this.API_URL}/auth/google`;
    }
  }

  /**
   * Handle Google OAuth callback
   * This should be called from the callback route
   * The backend may redirect to the frontend route with `access_token` in
   * the query string. If present, set token directly. Otherwise, fall back
   * to requesting the backend callback endpoint to obtain the token.
   */
  handleGoogleCallback(): Observable<AuthResponse> {
    if (!isPlatformBrowser(this.platformId)) {
      throw new Error('Google callback can only be handled in browser environment');
    }
    // Get the full URL including query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      this.setToken(accessToken);
      this.router.navigate(['/']);
      return of({ access_token: accessToken });
    }

    const code = urlParams.get('code');

    const callbackUrl = code
      ? `${this.API_URL}/auth/google/callback?code=${code}`
      : `${this.API_URL}/auth/google/callback${window.location.search}`;

    return this.http.get<AuthResponse>(callbackUrl).pipe(
      tap((response) => {
        this.setToken(response.access_token);
        this.router.navigate(['/']);
      })
    );
  }

  /**
   * Store token in localStorage and update signals
   */
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.token.set(token);
    this.isAuthenticated.set(true);
  }

  /**
   * Get stored token from localStorage
   */
  getStoredToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  /**
   * Get current token
   */
  getToken(): string | null {
    return this.token();
  }

  /**
   * Logout user
   */
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
    this.token.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }
}

