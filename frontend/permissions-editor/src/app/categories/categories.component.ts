import { Component, OnInit } from '@angular/core';
import { ICategory } from '../model/category';
import { IPermission } from '../model/permission';
import { CategoriesService } from '../util/categories.service';
import { PermissionsService } from '../util/permissions.service';

@Component({
  selector: 'categories-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  currentCategory: ICategory = {
    _id: '',
    text: ''
  };

  selectedCount = 0;
  selectedCategories: ICategory[] = [];

  inEditMode = false;

  categories: ICategory[] = [];
  permissions: IPermission[] = [];

  selectedPermissions: IPermission[] = [];

  constructor(
    private categoryService: CategoriesService, 
    private permissionsService: PermissionsService
    ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(fetchedCategories => this.categories = fetchedCategories);
    this.permissionsService.getPermissions().subscribe(fetchedPermissions => this.permissions = fetchedPermissions);
  }

  selectCategory(category: ICategory) {
    this.currentCategory = category;
  }

  setSelected(selected: ICategory[]) {
    this.selectedCategories = selected;
    this.selectedPermissions = [];

    selected.forEach(category => {
      if(category.text === "All") {
        this.selectedPermissions = this.permissions;
        return;
      }

      this.selectedPermissions = this.selectedPermissions.concat(this.filterPermissions(category));
    });
  }

  updateCategory(updatedCategory: ICategory) {
    const toUpdateIndex = this.categories.findIndex((category: ICategory) => category._id == updatedCategory._id);

    this.categories[toUpdateIndex].text = updatedCategory.text;

    this.categoryService.updateCategory(updatedCategory).subscribe();
  }

  setCount(count: number) {
    this.selectedCount = count;

    if (this.selectedCount !== 1) {
      this.inEditMode = false;
    } else {
      this.inEditMode = true;
    }
  }

  deleteCategory(categoriesToDelete: ICategory[]) {
    this.categories = this.categories.filter(category => !categoriesToDelete.includes(category));
    let permissionsToDelete: IPermission[] = [];

    categoriesToDelete.forEach(category => {
      permissionsToDelete = permissionsToDelete.concat(this.filterPermissions(category));
    });

    categoriesToDelete.forEach(category => {
      this.categoryService.deleteCategory(category).subscribe();
    });

    console.log(permissionsToDelete);

    permissionsToDelete.forEach(permission => {
      this.permissionsService.deletePermission(permission).subscribe();
    });

    this.selectedPermissions = [];
  }

  add(category: ICategory) {
    this.categories = this.categories.concat(category);

    this.categoryService.createCategory(category).subscribe();
  }

  filterPermissions(category: ICategory): IPermission[] {
    return this.permissions.filter(permission => permission.type === category.text);
  }

}
