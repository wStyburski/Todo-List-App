import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: any;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  handlerLoginUser(credentials) {
    this.authService.login(credentials)
      .then(res => {
        this.error = '';
        this.message = 'Zalogowano prawidłowo.';
        this.router.navigate(['/tasklist']);
      }, err => {
        this.error = err.message;
        this.message = '';
      });
  }

  redirectToRegisterPage() {
    this.router.navigate(['/register']);
  }

}
