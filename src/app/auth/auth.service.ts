import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  login(email: string, password: string): Promise<boolean> {
    // Perform authentication logic here, e.g., calling an API
    // Simulating login for demonstration purposes
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuthenticated = true;
        resolve(true);
      }, 1000); // Simulating async login process
    });
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
