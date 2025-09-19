import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

 
 
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = '';
  password = '';
  message = '';
 
  // Use the API URL from the environment configuration
  private apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) { }
 
  onSignUp() {
    this.http.post(`${this.apiUrl}/auth/signup`, {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.message = 'Sign up successful!';
        console.log(res);
      },
      error: (err: any) => {
        this.message = 'Sign up failed.';
        console.error(err);
      }
    });
  }
}