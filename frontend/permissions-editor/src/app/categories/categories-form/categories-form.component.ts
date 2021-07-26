import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnChanges {
  @Input() currentCategory: Category | undefined;
  @Input() inEditMode = false;
  @Output() updatedCategoryEvent = new EventEmitter<Category>();
  @Output() addCategoryEvent = new EventEmitter<Category>();

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
    const newCategory: Category = {_id: `${this.currentCategory?._id}`, text: `${this.categoryFormControl.value}`}

    if(this.inEditMode) {
      this.updatedCategoryEvent.emit(newCategory);
    } else {
      this.addCategoryEvent.emit(newCategory);
    }
  }

}
