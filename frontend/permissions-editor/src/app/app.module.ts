import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { SelectableListComponent } from './selectable-list/selectable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SelectableListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
