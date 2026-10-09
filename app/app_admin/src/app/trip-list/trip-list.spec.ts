
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { TripList } from './trip-list';
import { TripCard } from '../trip-card/trip-card';
import { TripEdit } from '../trip-edit/trip-edit';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

describe('TripList', () => {
  let component: TripList;
  let fixture: ComponentFixture<TripList>;

  const mockTrips: Trip[] = [
    {
      code: 'TEST001',
      name: 'Test Reef',
      length: '7 nights',
      start: '2026-10-09',
      resort: 'Test Resort',
      perPerson: '999',
      image: 'reef1.jpg',
      description: 'Mock trip for unit testing'
    }
  ];

  const mockTripData = {
    getTrips: () => of(mockTrips)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripList, TripCard, TripEdit],
      imports: [FormsModule],
      providers: [
        { provide: TripData, useValue: mockTripData }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TripList);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load mock trips', () => {
    expect(component.trips.length).toBe(1);
    expect(component.trips[0].name).toBe('Test Reef');
  });
});
