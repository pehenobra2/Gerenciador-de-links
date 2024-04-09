import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: "login",
    component:LoginComponent
  },

  {
    path: "cadastro",
    component:RegisterComponent
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate: [AuthGuard]
  }
];



