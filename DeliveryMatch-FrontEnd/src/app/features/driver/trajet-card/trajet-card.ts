import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {DriverService} from '../../../core/services/driver/driver-service';
import {AuthService} from '../../../core/services/auth/auth';
import {Trajet} from '../../../shared/models/trajet';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-trajet-card',
  imports: [
    NgIf
  ],
  templateUrl: './trajet-card.html',
  styleUrl: './trajet-card.scss'
})
export class TrajetCard {

  @Input() trajet!: Trajet;

  @Output() deleted = new EventEmitter<number>();

  constructor(
    private router: Router,
    private trajetService: DriverService,
    protected authService: AuthService
  ){}

  onEdit(trajet: Trajet){
    this.router.navigate(['/edit-trajet', trajet.id])
  }


  onDelete(id: number ) {
    if (confirm('Are you sure you want to delete this trajeeet?')) {
      this.trajetService.deleteTrajet(id).subscribe(() => {
        alert('Event deleted!');
        this.deleted.emit(id);

      });
    }
  }
}
