import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';
  // Use the API URL from the environment configuration
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    this.http.post(`${this.apiUrl}/auth/login`, {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.message = 'Login successful!';
        console.log(res);
        // this.router.navigate(['/']); // Redirect to home 
      },
      error: (err: any) => {
        this.message = 'Login failed.';
        console.error(err);
      }
    });
  }

}