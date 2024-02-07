import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, } from "@angular/forms";
import {SignupFormComponent} from "../signup-form/signup-form.component";
import {RouterModule} from "@angular/router";
import {NetworkIncServiceService} from "../network-inc-service.service";
import {NetworkIncType} from "../network-inc-type";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,SignupFormComponent,RouterModule ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {

  loginDetails = inject(NetworkIncServiceService)

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
submitLogin(){
  this.loginDetails.submitLogin(
    this.loginForm.value.email ?? "",
    this.loginForm.value.password ?? ""
    )
}
}
