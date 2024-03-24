import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class AuthPage implements OnInit {
email: any;
password: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  async login(email: string, password: string): Promise<void> {
    try {
      await this.authService.login(email, password);
      // Redirect to places page upon successful login
      this.router.navigate(['/places']);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

}
