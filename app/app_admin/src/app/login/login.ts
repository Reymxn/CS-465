import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onLogin(): void {
    this.errorMessage = '';

    this.http.post<{ token: string }>('/api/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        if (response.token) {
          sessionStorage.setItem('travlr_token', response.token);
          window.location.reload();
        } else {
          this.errorMessage = 'Login failed. No token received.';
        }
      },
      error: () => {
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }
}