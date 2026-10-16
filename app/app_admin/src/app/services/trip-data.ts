import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  private apiUrl = '/api/trips';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('travlr_token');

    return new HttpHeaders({
      Authorization: `Bearer ${token || ''}`
    });
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}/${code}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(
      this.apiUrl,
      trip,
      { headers: this.getAuthHeaders() }
    );
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiUrl}/${trip.code}`,
      trip,
      { headers: this.getAuthHeaders() }
    );
  }

  deleteTrip(code: string): Observable<unknown> {
    return this.http.delete(
      `${this.apiUrl}/${code}`,
      { headers: this.getAuthHeaders() }
    );
  }
}