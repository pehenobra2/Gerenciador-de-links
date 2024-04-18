import { AuthGuard } from './../../../services/auth-guard.service';
import { PrimaryInputComponent } from './../../../components/primary-input/primary-input.component';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatToolbar } from '@angular/material/toolbar';
import { LinksService } from '../../../services/links.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultLayoutComponent } from '../../../components/default-layout/default-layout.component';
import { ToastrService } from 'ngx-toastr';
import { LinkResolver } from '../../guards/link.resolver';
import { Links } from '../model/links';



@Component({
  selector: 'app-home-form',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    DefaultLayoutComponent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatCardModule,
    MatToolbar
  ],
  templateUrl: './home-form.component.html',
  styleUrl: './home-form.component.css',
  providers:[LinksService]
})
export class HomeFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LinksService,
    private toastService: ToastrService,
    private route: ActivatedRoute,
    private AuthGuard: AuthGuard
  ){
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required, Validators.minLength(5)]),
      url: new FormControl('', [Validators.required]),
    });


  }

  ngOnInit(): void {
    const link: Links = this.route.snapshot.data['link'];
    this.form.setValue({
      id: link.id,
      titulo: link.titulo,
      url: link.url
    })
  }

  onSubmit() {
    const token = this.AuthGuard.getToken();
    console.log("o token é :" + token);
    if (token) {
      this.service.save(this.form.value, token).subscribe({
        next: () => {
          this.toastService.success("Cadastro de novo link foi com sucesso!");
          this.onCancel();
          console.log(this.form.value);
        },
        error: () => this.toastService.error("Erro ao cadastrar novo link")
      });
    } else {
      this.toastService.error("Erro: Token não disponível");
    }
  }
  onCancel(){
    this.router.navigate(["home"])
  }

 /* getErrorMessage(fieldName: String){
    const field = this.form.get(fieldName);

    if(field?.hasError('required')){

    }
  }*/
}
