import { Routes } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LayoutComponent} from "./layout/layout.component";
import {LoginComponent} from "./login/login.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";

export const routes: Routes = [

  {
    path: '',
    redirectTo: " login",
    pathMatch: 'full'
  },
  {
    path: "signup",
    component: SignupFormComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    children: [
      {
        path: "login",
        component: LoginFormComponent,
      },

    ]
  },
  {
    path: "",
    component: LayoutComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]

  },



];
