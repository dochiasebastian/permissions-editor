import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  model= new Category("asf23fed", "Category Name");
  submited = false;

  categoryFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);

  matcher = new CustomErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submited = true;
  }

}
