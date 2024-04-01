import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formData: any={}

  constructor(
    private router: Router,

  ){}

  onSubmit(){
    console.log(this.formData);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  
}
