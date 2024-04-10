import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "login",

  },
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
    loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES),
    canActivate: [AuthGuard]
  }
];



