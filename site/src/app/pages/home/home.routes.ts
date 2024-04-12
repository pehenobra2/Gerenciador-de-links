import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeFormComponent } from './home-form/home-form.component';

export const HOME_ROUTES: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'new', component: HomeFormComponent
  },
  {
    path:'edit/:id', component: HomeFormComponent
  }
];

