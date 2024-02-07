import { Component } from '@angular/core';
import {SignupFormComponent} from "../signup-form/signup-form.component";
import {LoginFormComponent} from "../login-form/login-form.component";
import {RouterModule} from "@angular/router";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    RouterModule,
    RouterOutlet,
    SignupFormComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
