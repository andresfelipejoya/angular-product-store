import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthCredentials, AuthResponse } from '../../domain/auth-credentials.entity';
import { LoginUseCase } from '../../application/login.use-case';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(
    private loginUseCase: LoginUseCase,
    private router: Router,
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  errorMessage = signal<string | null>(null);

  isSubmitting = false;

  onSubmit(): Observable<AuthResponse> | void {
    if (this.loginForm.invalid) {
      console.warn('Formulario inválido');
      return;
    }

    this.isSubmitting = true;
    this.errorMessage.set(null);

    this.loginUseCase.login(
      this.loginForm.value as AuthCredentials).subscribe({
        next: (response: AuthResponse) => {
          this.router.navigate(['/product-showcase']);
        },
        error: (error) => {
          console.error('Error en la autenticación', error);
          this.errorMessage.set(error.error || 'Error desconocido');
        }
      });

    this.isSubmitting = false;
  }
}
