import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from '../permissions/permissions.component';
import { PermissionsFormComponent } from '../permissions/permissions-form/permissions-form.component';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectableListModule } from '../selectable-list/selectable-list.module';


@NgModule({
  declarations: [
    PermissionsComponent,
    PermissionsFormComponent,
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SelectableListModule,
  ]
})
export class PermissionsModule { }
