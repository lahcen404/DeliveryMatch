import { Component } from '@angular/core';
import {TrajetList} from '../../driver/trajet-list/trajet-list';

@Component({
  selector: 'app-search-trips',
  imports: [
    TrajetList
  ],
  templateUrl: './search-trips.html',
  styleUrl: './search-trips.scss'
})
export class SearchTrips {

}
