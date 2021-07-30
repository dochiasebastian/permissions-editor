import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesFormComponent } from '../categories/categories-form/categories-form.component';
import { CategoriesListComponent } from '../reusables/categories-list/categories-list.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectableListModule } from '../selectable-list/selectable-list.module';
import { PermissionsListComponent } from '../reusables/permissions-list/permissions-list.component';


@NgModule({
  declarations: [
    CategoriesFormComponent,
    CategoriesComponent,
    CategoriesListComponent,
    PermissionsListComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SelectableListModule,
  ]
})
export class CategoriesModule { }
