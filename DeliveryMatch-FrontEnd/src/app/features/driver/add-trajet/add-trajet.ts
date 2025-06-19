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
  isEditMode = false;
  trajetId!: number;

constructor(
  private fb: FormBuilder,
  private trajetService: DriverService,
  private router: Router,
  private route: ActivatedRoute
  ){
  this.trajetForm=this.fb.group({
  pointDepart: ['',Validators.required],
  destinationFinale: ['',Validators.required],
  etapesIntermediaires: ['',Validators.required],
  dateDepart: ['',Validators.required],
  capaciteDisponible: ['',Validators.required],
  dimensionsMax: ['',Validators.required],
  typeMarchandise: ['',Validators.required]

})}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.trajetId = +idParam;
      this.loadTrajet(this.trajetId);
    }
  }

  loadTrajet(id: number) {
    this.trajetService.getTrajetById(id).subscribe(trajet => {
      this.trajetForm.patchValue({
        pointDepart: trajet.pointDepart,
        destinationFinale: trajet.destinationFinale,
        etapesIntermediaires: trajet.etapesIntermediaires,                  // backend date string 'yyyy-MM-dd'
        dateDepart: trajet.dateDepart,
        capaciteDisponible: trajet.capaciteDisponible,
        dimensionsMax: trajet.dimensionsMax,
        typeMarchandise: trajet.typeMarchandise
      });
    });
  }

onSubmit(){
  if (this.trajetForm.invalid) return;

  const formData = this.trajetForm.value;

  if (this.isEditMode){
    this.trajetService.updateTrajet(this.trajetId, formData).subscribe(() => {
      alert('Trajet updated successfully!');
      this.router.navigate(['/trajets']);
    })
  }

  this.trajetService.addTrajet(formData).subscribe(()=> {
    console.log("trrajeet added §§");
    this.router.navigate(['/driver-dashboard']);
  })
}
}
