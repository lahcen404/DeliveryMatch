import { Routes } from '@angular/router';
import {RegisterComponent} from './features/auth/register/register';
import {Login} from './features/auth/login/login';
import {Home} from './features/home/home/home';
import {AdminDashboard} from './features/admin/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: Home },
  { path: 'admin-dashboard', component: AdminDashboard }


];
