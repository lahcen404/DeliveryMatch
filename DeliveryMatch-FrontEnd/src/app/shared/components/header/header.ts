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

  constructor( protected authService: AuthService, private router: Router) {
  }

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  onToggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
