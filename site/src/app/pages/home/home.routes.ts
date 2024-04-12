import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { LinkResolver } from '../guards/link.resolver';

export const HOME_ROUTES: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'new', component: HomeFormComponent, resolve: {link: LinkResolver}
  },
  {
    path:'edit/:id', component: HomeFormComponent, resolve: {link: LinkResolver}
  }
];

