import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'permissions', loadChildren: () => import('./permissions/permissions.module').then(m => m.PermissionsModule) },
  { path: 'preview', loadChildren: () => import('./preview/preview.module').then(m => m.PreviewModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
