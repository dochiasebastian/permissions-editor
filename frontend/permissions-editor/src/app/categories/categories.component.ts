import { Component, OnInit, Output } from '@angular/core';
import { ICategory } from '../model/category';
import { IPermission } from '../model/permission';
import { CategoryService } from '../util/categories.service';
import { PermissionsService } from '../util/permissions.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  currentCategory: ICategory = {
    _id: '',
    text: ''
  };
  selectedCount = 0;

  inEditMode = false;

  categories: ICategory[] = [];

  permissions: IPermission[] = [];

  selectedPermissions: IPermission[] = [];

  constructor(
    private categoryService: CategoryService, 
    private permissionsService: PermissionsService
    ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(fetchedCategories => this.categories = fetchedCategories);
    this.permissionsService.getPermissions().subscribe(fetchedPermissions => this.permissions = fetchedPermissions);
  }

  selectCategory(category: ICategory) {
    this.currentCategory = category;
    if(category.text === "All") {
      this.selectedPermissions = this.permissions;
    } else {
      this.selectedPermissions = this.permissions.filter(permission => permission.type == category.text); 
    }
  }

  updateCategory(updatedCategory: ICategory) {
    const toUpdateIndex = this.categories.findIndex((category: ICategory) => category._id == updatedCategory._id);

    this.categories[toUpdateIndex].text = updatedCategory.text;

    this.categoryService.updateCategory(updatedCategory).subscribe();
  }

  setCount(count: number) {
    this.selectedCount = count;

    if (!this.selectedCount) {
      this.inEditMode = false;
    } else {
      this.inEditMode = true;
    }
  }

  deleteItem(categoriesToDelete: ICategory[]) {
    this.categories = this.categories.filter(category => !categoriesToDelete.includes(category));

    categoriesToDelete.forEach(category => {
      this.categoryService.deleteCategory(category).subscribe();
    });
  }

  add(category: ICategory) {
    this.categories = this.categories.concat(category);

    this.categoryService.createCategory(category).subscribe();
  }

}
