import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ICategory } from 'src/app/model/category';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'categories-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesFormComponent implements OnChanges {
  @Input() currentCategory: ICategory | undefined;
  @Input() inEditMode = false;
  @Output() updatedCategoryEvent = new EventEmitter<ICategory>();
  @Output() addCategoryEvent = new EventEmitter<ICategory>();

  categoryFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);

  matcher = new CustomErrorStateMatcher();

  constructor() { }

  ngOnChanges() {
    if(this.inEditMode) {
      this.categoryFormControl.setValue(this.currentCategory!.text);
    } else {
      this.categoryFormControl.setValue('');
    }
  }

  onSubmit() {
    const newCategory: ICategory = {_id: `${this.currentCategory?._id}`, text: `${this.categoryFormControl.value}`}

    if(this.inEditMode) {
      this.updatedCategoryEvent.emit(newCategory);
    } else {
      this.addCategoryEvent.emit(newCategory);
    }
  }

}
