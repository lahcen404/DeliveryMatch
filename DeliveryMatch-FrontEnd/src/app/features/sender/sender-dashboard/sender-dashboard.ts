import { Component } from '@angular/core';
import {TrajetList} from '../../driver/trajet-list/trajet-list';

@Component({
  selector: 'app-sender-dashboard',
  imports: [
    TrajetList
  ],
  templateUrl: './sender-dashboard.html',
  styleUrl: './sender-dashboard.scss'
})
export class SenderDashboard {

}
