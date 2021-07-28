import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectableListComponent } from './selectable-list/selectable-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PermissionsFormComponent } from './permissions/permissions-form/permissions-form.component';
import { PreviewComponent } from './preview/preview.component';
import { CategoriesListComponent } from './reusables/categories-list/categories-list.component';
import { PermissionsListComponent } from './reusables/permissions-list/permissions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleOnlyPipe } from './util/titleOnly.pipe';
import { ColorFalsyDirective } from './util/color-falsy.directive';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SelectableListComponent,
    CategoriesFormComponent,
    PermissionsComponent,
    PermissionsFormComponent,
    PreviewComponent,
    CategoriesListComponent,
    PermissionsListComponent,
    TitleOnlyPipe,
    ColorFalsyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
