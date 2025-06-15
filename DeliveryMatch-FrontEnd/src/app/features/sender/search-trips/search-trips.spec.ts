import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrips } from './search-trips';

describe('SearchTrips', () => {
  let component: SearchTrips;
  let fixture: ComponentFixture<SearchTrips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTrips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTrips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
