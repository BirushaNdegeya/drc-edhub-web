import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

export interface User {
  id?: string;
  firstname?: string;
  lastname?: string;
  surname?: string;
  age?: number;
  school?: string;
  province?: string;
  location?: string;
  role?: string;
  sex?: string;
  section?: string;
  class?: string;
  email?: string;
  picture?: string; // For Google profile picture
}

export interface UpdateUserRequest {
  firstname?: string;
  lastname?: string;
  surname?: string;
  age?: number;
  school?: string;
  province?: string;
  location?: string;
  role?: string;
  sex?: string;
  section?: string;
  class?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Get current authenticated user
   * Note: Adjust the endpoint based on your backend API
   * Common patterns: /users/me, /users, /user
   * Since PATCH /users updates the authenticated user, there should be a GET endpoint
   * to retrieve the current user. Update this if your backend uses a different endpoint.
   */
  getCurrentUser(): Observable<User> {
    // Adjust this endpoint to match your backend API
    // If your backend uses GET /users (without /me), change it accordingly
    return this.http.get<User>(`${this.API_URL}/users/me`);
  }

  /**
   * Update current authenticated user
   */
  updateUser(userData: UpdateUserRequest): Observable<User> {
    return this.http.patch<User>(`${this.API_URL}/users`, userData);
  }
}

