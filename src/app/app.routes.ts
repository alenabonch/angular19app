import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos', loadComponent: () => import('./todos/todos-page/todos-page.component').then(m => m.TodosPageComponent)},
  {path: 'users', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)},
  {path: 'catalog', loadComponent: () => import('./catalog/catalog.component').then(m => m.CatalogComponent)},
  {path: '**', loadComponent: () => import('./core/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];
