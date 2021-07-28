import { Component, OnInit } from '@angular/core';
import { ICategory } from '../model/category';
import { IPermission } from '../model/permission';
import { IPreference } from '../model/preference';
import { CategoriesService } from '../util/categories.service';
import { PermissionsService } from '../util/permissions.service';
import { PreferenceService } from '../util/preferences.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  categories: ICategory[] = [];
  permissions: IPermission[] = [];

  selected = '';

  selectedOptions: IPermission[] = [];

  classes: string[] = ['pop-up', 'hidden'];

  constructor(
    private categoriesService: CategoriesService,
    private permissionsService: PermissionsService,
    private preferencesService: PreferenceService
  ) { }

  onMouseLeave() {
    const toDeleteIndex = this.classes.indexOf('showing');
    if(toDeleteIndex !== -1) {
      this.classes.splice(toDeleteIndex, 1)
    }
  }

  onSubmit() {
    let message: IPreference[];

    message = this.permissions.map(permission => {
      return { 
        permission: permission.text,
        isAllowed: this.selectedOptions.includes(permission) 
      };
    });

    this.preferencesService.postPreferences(message).subscribe();
  }

  onCategoryChange() {
    if(this.selected === "All") {
      this.selectedOptions = this.permissions;
      return;
    }

    this.selectedOptions = this.permissions.filter(permission => permission.type === this.selected || permission.type === "Necessary");
  }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(fetchedCategories => this.categories = fetchedCategories);
    this.permissionsService.getPermissions()
      .subscribe(fetchedPermissions => {
        this.permissions = fetchedPermissions;
        this.selectedOptions = fetchedPermissions.filter(permission => permission.type == "Necessary");
      });
  }

  
}
