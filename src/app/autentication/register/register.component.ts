import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  authError: string = '';


  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.authError = 'Las contraseñas no coinciden';
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.name, this.lastName, this.email, this.password)
      .then(res => {
        alert('Registro exitoso')
        this.router.navigate(['/movies']);
      })
      .catch(err => {
        alert('Registrado');
        this.authError = err.message;
      });
  }
}
