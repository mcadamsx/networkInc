import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RouterModule} from "@angular/router";
import {RouterLink} from "@angular/router";
import {NetworkIncServiceService} from "../network-inc-service.service";

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  route:ActivatedRoute = inject(ActivatedRoute)

  signupForm = new FormGroup({
    username : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl ('')

  })

  signupDetails :NetworkIncServiceService = inject(NetworkIncServiceService)

  submitSignUp(){
    this.signupDetails.submitSignUp(
      this.signupForm.value.username ?? " ",
      this.signupForm.value.email ?? " ",
      this.signupForm.value.password ?? "",
      this.signupForm.value.confirmPassword ?? ""
    )




  }


}
