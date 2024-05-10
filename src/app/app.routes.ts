import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
export const routes: Routes = [
  {path: '',
  redirectTo: 'home',
  pathMatch: 'full'},

  { path: 'home', component:HomeComponent },
  { path: 'about', component: AboutComponent}
];
