import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'permissions', component: PermissionsComponent},
  {path: 'preview', component: PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
