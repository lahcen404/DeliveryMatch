import { Component } from '@angular/core';
import {TrajetList} from '../../driver/trajet-list/trajet-list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sender-dashboard',
  imports: [
    TrajetList,
    RouterLink
  ],
  templateUrl: './sender-dashboard.html',
  styleUrl: './sender-dashboard.scss'
})
export class SenderDashboard {

}
