
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-edit',
  standalone: false,
  templateUrl: './trip-edit.html',
  styleUrl: './trip-edit.css'
})
export class TripEdit {
  @Input() trip!: Trip;

  @Output() tripSaved = new EventEmitter<void>();
  @Output() editCancelled = new EventEmitter<void>();

  saving = false;
  errorMessage = '';
  successMessage = '';

  constructor(private tripData: TripData) {}

  saveTrip(): void {
    if (!this.trip) {
      return;
    }

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.tripData.updateTrip(this.trip).subscribe({
      next: () => {
        this.saving = false;
        this.successMessage = 'Trip updated successfully!';
        this.tripSaved.emit();
      },
      error: (error) => {
        console.error('Error updating trip:', error);
        this.errorMessage = 'Unable to update trip.';
        this.saving = false;
      }
    });
  }

  cancelEdit(): void {
    this.editCancelled.emit();
  }
}
