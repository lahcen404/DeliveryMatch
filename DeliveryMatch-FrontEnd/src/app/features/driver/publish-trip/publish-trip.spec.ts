import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTrip } from './publish-trip';

describe('PublishTrip', () => {
  let component: PublishTrip;
  let fixture: ComponentFixture<PublishTrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishTrip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTrip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
