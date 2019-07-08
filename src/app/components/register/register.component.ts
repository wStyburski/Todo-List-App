import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message: any;
  error: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  handlerRegisterUser(credentails: any) {
    this.authService.register(credentails)
      .then(res => {
        this.error = '';
        this.message = 'Konto założone prawidłowo.';
        alert(this.message);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      }, err => {
        this.error = err.message;
        this.message = '';
      });
  }

  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }
}
