import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../../../core/services/auth/auth';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  public isMenuOpen = false;

  constructor( protected authService: AuthService, private router: Router) {
  }

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  onToggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
