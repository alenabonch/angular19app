import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: 'users', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)},
  {path: 'catalog', loadComponent: () => import('./catalog/catalog.component').then(m => m.CatalogComponent)},
  {path: '**', loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];
