import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {LoginComponent} from "./login/login.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";

export const routes: Routes = [

  {
    path: "",
    component: LayoutComponent,
    title: "Dashboard"
  },
  {
    path: "signup",
    component: SignupFormComponent,
    title: "signup"
  },
  {
    path: "login",
    component: LoginComponent,
    title: "dashboard"
  }


];
