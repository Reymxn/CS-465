
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-list',
  standalone: false,
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {
  trips: Trip[] = [];
  selectedTrip: Trip | null = null;
  errorMessage = '';

  constructor(
    private tripData: TripData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripData.getTrips().subscribe({
      next: (data: Trip[]) => {
        this.trips = data;
        this.errorMessage = '';
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error loading trips:', error);
        this.errorMessage = 'Unable to load trips.';
        this.cdr.markForCheck();
      }
    });
  }

  editTrip(trip: Trip): void {
    console.log('Editing trip:', trip.name);
    this.selectedTrip = { ...trip };
    this.cdr.markForCheck();
  }

  onTripSaved(): void {
    this.selectedTrip = null;
    this.loadTrips();
    this.cdr.markForCheck();
  }

  cancelEdit(): void {
    this.selectedTrip = null;
    this.cdr.markForCheck();
  }
}
