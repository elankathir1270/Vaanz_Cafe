import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeveragesComponent } from './components/beverages/beverages.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { BeveragesCategoriesComponent } from './components/beverages/beverages-categories/beverages-categories.component';
import { BeveragesListComponent } from './components/beverages/beverages-list/beverages-list.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'beverages',
    component: BeveragesComponent,
    children: [
      { path: '', component: BeveragesListComponent, title: 'beverages list' },
      {
        path: 'coffee',
        component: BeveragesCategoriesComponent,
        title: 'beverages categories',
      },
    ],
  },
  { path: 'desserts', component: DessertsComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'pizza', component: PizzaComponent },
];
