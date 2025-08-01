import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../domain/user.entity';
import { UserHttpService } from '../../infrastructure/user-http.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(private userHttpService: UserHttpService, private router: Router) { }

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });


  onSubmit(): void {
    if (!this.registerForm.valid) {
      console.warn('Formulario inválido');
      return;
    }
    console.log('Formulario válido', this.registerForm.value);
    const user: User = this.registerForm.value as User;
    this.userHttpService.createUser(user).subscribe({
      next: (response: User) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error al registrar el usuario', error);
      }
    });
  }
}
