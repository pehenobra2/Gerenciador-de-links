import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component'; // Importe LoginComponent
import { RegisterComponent } from './register/register.component'; // Importe RegisterComponent

@NgModule({
  declarations: [
    LoginComponent, // Adicione LoginComponent ao array declarations
    RegisterComponent // Adicione RegisterComponent ao array declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap: []
})
export class AppModule { }
