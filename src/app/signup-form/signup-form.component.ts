import {NgIf} from "@angular/common";
import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RouterModule} from "@angular/router";
import {RouterLink} from "@angular/router";
import {NetworkIncServiceService} from "../network-inc-service.service";

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, RouterLink, NgIf],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  })
  constructor(private fb: FormBuilder) {}
  get username (){
    return this.signupForm.controls['username'];
  }
  get email (){
    return this.signupForm.controls['email'];
  }
  get password (){
    return this.signupForm.controls['password'];
  }
  get confirmPassword (){
    return this.signupForm.controls['confirmPassword'];
  }
}
