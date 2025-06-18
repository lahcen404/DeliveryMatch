import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrajet } from './add-trajet';

describe('AddTrajet', () => {
  let component: AddTrajet;
  let fixture: ComponentFixture<AddTrajet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrajet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrajet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
