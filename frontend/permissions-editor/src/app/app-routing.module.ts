import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './util/auth.guard';

const routes: Routes = [
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule), canActivate: [AuthGuard] },
  { path: 'permissions', loadChildren: () => import('./permissions/permissions.module').then(m => m.PermissionsModule), canActivate: [AuthGuard] },
  { path: 'preview', loadChildren: () => import('./preview/preview.module').then(m => m.PreviewModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
