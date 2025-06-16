import {Component, signal} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {AuthService} from '../../../core/services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatError,
    MatInput,
    MatIcon,
    MatFormField,
    MatIconButton,
    NgIf,
    MatButton,
    MatLabel,
    MatCardSubtitle,
    MatCardTitle,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm: FormGroup;
  hide = signal(true);
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void{
    this.loginError= null;  // clear previous error
    if (this.loginForm.invalid) {
      return;
    }

    const{email , password} = this.loginForm.value;

    this.auth.login({ email, password }).subscribe({
      next: (res) => {
        this.auth.saveAuth(res);

        if (this.auth.getRole()=="ADMIN"){
        this.router.navigate(['/admin-dashboard']);
        }
        console.log("Logiin dooone")
        this.auth.saveToken(res.token);
        console.log('Token howa : ', res.token);

      },
      error: (err) => {
        console.error('Login failed', err);
        this.loginError = 'Invalid email or password. Please try again.';
      },
    });
  }

  togglePassword(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  get emailError(): string {
    const emailCtrl = this.loginForm.get('email');
    if (emailCtrl?.hasError('required')) return 'Email is required';
    if (emailCtrl?.hasError('email')) return 'Invalid email address';
    return '';
  }
}
