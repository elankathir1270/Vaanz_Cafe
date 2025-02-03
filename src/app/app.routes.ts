import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeveragesComponent } from './components/beverages/beverages.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import { PizzaComponent } from './components/pizza/pizza.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'beverages', component: BeveragesComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'pizza', component: PizzaComponent },
];
