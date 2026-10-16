import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = false;

  constructor() {
    this.isLoggedIn = !!sessionStorage.getItem('travlr_token');
  }

  logout(): void {
    sessionStorage.removeItem('travlr_token');
    this.isLoggedIn = false;
  }
}