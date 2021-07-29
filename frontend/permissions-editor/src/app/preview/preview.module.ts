import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from '../preview/preview.component';
import { TitleOnlyPipe } from '../util/titleOnly.pipe';
import { ColorFalsyDirective } from '../util/color-falsy.directive';
import { PreviewRoutingModule } from './preview-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PreviewComponent,
    TitleOnlyPipe,
    ColorFalsyDirective
  ],
  imports: [
    CommonModule,
    PreviewRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PreviewModule { }
