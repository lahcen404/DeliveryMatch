import { Routes } from '@angular/router';
import {RegisterComponent} from './features/auth/register/register';
import {Login} from './features/auth/login/login';
import {Home} from './features/home/home/home';
import {AdminDashboard} from './features/admin/admin-dashboard/admin-dashboard';
import {DriverDashboard} from './features/driver/driver-dashboard/driver-dashboard';
import {SenderDashboard} from './features/sender/sender-dashboard/sender-dashboard';
import {adminGuard} from './core/guards/admin guards/admin-guard-guard';
import {driverGuard} from './core/guards/driver guards/driver-guard';
import {senderGuard} from './core/guards/sender guards/sender-guard';
import {AddTrajet} from './features/driver/add-trajet/add-trajet';
import {TrajetCard} from './features/driver/trajet-card/trajet-card';
import {SearchTrips} from './features/sender/search-trips/search-trips';
import {TripManagement} from './features/admin/trip-management/trip-management';
import {adminOrDriverGuard} from './core/guards/admin-or-driver/admin-or-driver-guard';
import {UserManagement} from './features/admin/user-management/user-management';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: Home },
  { path: 'admin-dashboard', component: AdminDashboard , canActivate: [adminGuard]},
  { path: 'driver-dashboard', component: DriverDashboard , canActivate: [driverGuard] },
  { path: 'add-trajet', component: AddTrajet , canActivate: [adminOrDriverGuard]   },
  { path: 'edit-trajet/:id', component: AddTrajet , canActivate:[adminGuard ] },
  { path: 'users', component: UserManagement , canActivate:[adminGuard ] },

  { path: 'trajets', component: TripManagement  },


  { path: 'trajet-card', component: TrajetCard },

  { path: 'sender-dashboard', component: SenderDashboard , canActivate: [senderGuard] }


];
