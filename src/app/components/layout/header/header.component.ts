import { Component, signal, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../../../services/auth.service';
import { UserService, User } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = signal(false);
  user = signal<User | null>(null);

  constructor(
    public authService: AuthService,
    private userService: UserService
  ) {
    // Fetch user when authenticated
    effect(() => {
      if (this.authService.isAuthenticated()) {
        this.loadUser();
      } else {
        this.user.set(null);
      }
    });
  }

  ngOnInit(): void {
    // Load user if already authenticated
    if (this.authService.isAuthenticated()) {
      this.loadUser();
    }
  }

  loadUser(): void {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.user.set(user);
      },
      error: (error) => {
        console.error('Error loading user:', error);
        // If unauthorized, logout
        if (error.status === 401) {
          this.authService.logout();
        }
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  signOut() {
    this.authService.logout();
  }

  getUserInitials(): string {
    const currentUser = this.user();
    if (!currentUser) return '';
    
    const first = currentUser.firstname?.charAt(0).toUpperCase() || '';
    const last = currentUser.lastname?.charAt(0).toUpperCase() || '';
    return first + last || currentUser.email?.charAt(0).toUpperCase() || 'U';
  }

  getUserDisplayName(): string {
    const currentUser = this.user();
    if (!currentUser) return '';
    
    if (currentUser.firstname && currentUser.lastname) {
      return `${currentUser.firstname} ${currentUser.lastname}`;
    }
    return currentUser.email || 'User';
  }
}
