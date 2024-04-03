import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { ToastrService } from 'ngx-toastr';

interface RegisterForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl,

}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[LoginService]
})
export class RegisterComponent {

  registerFrom!: FormGroup<RegisterForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService : ToastrService
  ){
    this.registerFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.registerFrom.value.email, this.registerFrom.value.password).subscribe({
      next: () => this.toastService.success("Cadastro concluído com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate(){
    this.router.navigate(["login"])
  }

}
