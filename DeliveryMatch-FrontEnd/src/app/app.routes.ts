import { Routes } from '@angular/router';
import {RegisterComponent} from './features/auth/register/register';
import {Login} from './features/auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },

];
