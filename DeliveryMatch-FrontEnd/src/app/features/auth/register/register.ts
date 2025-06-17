import { Component } from '@angular/core';
import {AuthService} from '../../../core/services/auth/auth';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatButton
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  form = {
    nomComplet : '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register(this.form).subscribe({
      next: (res) => {
        this.auth.saveAuth(res);
        this.router.navigate(['/login']);
        console.log("Register doooone!")
      },
      error: (err) => console.log(err)
    });
  }
}
