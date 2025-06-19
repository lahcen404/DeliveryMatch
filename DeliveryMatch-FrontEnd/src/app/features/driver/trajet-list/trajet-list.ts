import {Component, OnInit} from '@angular/core';
import {TrajetCard} from '../trajet-card/trajet-card';
import {Trajet} from '../../../shared/models/trajet';
import {DriverService} from '../../../core/services/driver/driver-service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-trajet-list',
  imports: [
    TrajetCard,
    NgForOf
  ],
  templateUrl: './trajet-list.html',
  styleUrl: './trajet-list.scss'
})
export class TrajetList implements OnInit {
    trajets: Trajet[] =[];

    constructor(private trajetService: DriverService){}

  ngOnInit(): void {
      this.loadTrajets();
  }


  private loadTrajets() {
    this.trajetService.getAllTrajets().subscribe(data => {
      this.trajets = data;
      console.log("data", data);
    });
  }
    onTrajetDeleted(deletedId: number) {
      this.trajets = this.trajets.filter(trajet => trajet.id !== deletedId);
    }
}
