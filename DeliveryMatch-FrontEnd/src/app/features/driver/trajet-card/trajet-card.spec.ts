import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetCard } from './trajet-card';

describe('TrajetCard', () => {
  let component: TrajetCard;
  let fixture: ComponentFixture<TrajetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrajetCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrajetCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
