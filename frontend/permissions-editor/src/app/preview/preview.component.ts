import { Component, OnInit } from '@angular/core';
import { ICategory } from '../model/category';
import { IPermission } from '../model/permission';
import { CategoriesService } from '../util/categories.service';
import { PermissionsService } from '../util/permissions.service';

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

  constructor(private categoriesService: CategoriesService, private permissionsService: PermissionsService) { }

  onMouseLeave(event: MouseEvent) {
    const toDeleteIndex = this.classes.indexOf('showing');
    if(toDeleteIndex !== -1) {
      this.classes.splice(toDeleteIndex, 1)
    }
  }

  onSubmit() {

  }

  onCategoryChange() {
    this.selectedOptions = this.permissions.filter(permission => permission.type === this.selected)
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(fetchedCategories => this.categories = fetchedCategories);
    this.permissionsService.getPermissions().subscribe(fetchedPermissions => this.permissions = fetchedPermissions);
  }

  
}
