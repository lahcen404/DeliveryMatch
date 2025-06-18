import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DriverService} from '../../../core/services/driver/driver-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-trajet',
  imports: [ReactiveFormsModule],
  templateUrl: './add-trajet.html',
  styleUrl: './add-trajet.scss'
})
export class AddTrajet implements OnInit{
trajetForm: FormGroup;

constructor(
  private fb: FormBuilder,
  private trajetService: DriverService,
  private router: Router,
  private route: ActivatedRoute
  ){this.trajetForm=this.fb.group({
  pointDepart: ['',Validators.required],
  destinationFinale: ['',Validators.required],
  etapesIntermediaires: ['',Validators.required],
  dateDepart: ['',Validators.required],
  capaciteDisponible: ['',Validators.required],
  dimensionsMax: ['',Validators.required],
  typeMarchandise: ['',Validators.required]

})}

  ngOnInit(): void {
  }
onSubmit(){
  if (this.trajetForm.invalid) return;

  const formData = this.trajetForm.value;

  this.trajetService.addTrajet(formData).subscribe(()=> {
    console.log("trrajeet added §§");
    this.router.navigate(['/driver-dashboard']);
  })
}
}
