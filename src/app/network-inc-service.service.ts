import { Injectable } from '@angular/core';
import {NetworkIncType} from "./network-inc-type";

@Injectable({
  providedIn: 'root'
})
export class NetworkIncServiceService {
  
  constructor() { }

  submitLogin(email:string, password: string){
    console.log(email, password)
  }
  submitSignUp (username:string,email:string,password:string,confirmPassword:string){
    console.log(`${username}\n ${email}\n${password}\n${confirmPassword}`)
  }
}
