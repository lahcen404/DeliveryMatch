import { Component } from '@angular/core';
import {TrajetList} from '../../driver/trajet-list/trajet-list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-trip-management',
  imports: [
    TrajetList,
    RouterLink
  ],
  templateUrl: './trip-management.html',
  styleUrl: './trip-management.scss'
})
export class TripManagement {

}
