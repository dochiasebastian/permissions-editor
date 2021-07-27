import { Component, OnInit } from '@angular/core';
import { ICategory } from '../model/category';
import { IPermission } from '../model/permission';
import { PermissionsService } from '../util/permissions.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  currentPermission: IPermission = {
    _id: '',
    type: '',
    text: ''
  };

  selectedCount = 0;

  inEditMode = false;

  permissions: IPermission[] = [];

  categories = [
    {
      _id: '1e1dw3d',
      text: 'All'
    },
    {
      _id: 'gdfsgsdg',
      text: 'Necessary'
    },
    {
      _id: '32t2gvedg',
      text: 'Permissive'
    },
    {
      _id: '2geg0-rg',
      text: 'Funny'
    },
    {
      _id: '2g7egrg',
      text: 'Useless'
    }
  ];

  constructor(private permissionsService: PermissionsService) { }

  ngOnInit(): void {
    this.permissionsService.getPermissions().subscribe(fetchedPermissions => this.permissions = fetchedPermissions);
  }

  selectPermission(permission: any) {
    this.currentPermission = permission;
  }

  updatePermission(updatedPermission: any) {
    const toUpdateIndex = this.permissions.findIndex((permission: IPermission) => permission._id == updatedPermission._id);

    this.permissions[toUpdateIndex].text = updatedPermission.text;

    this.permissionsService.updatePermission(updatedPermission).subscribe();
  }

  setCount(count: number) {
    this.selectedCount = count;

    if (!this.selectedCount) {
      this.inEditMode = false;
    } else {
      this.inEditMode = true;
    }
  }

  deleteItem(permissionsToDelete: IPermission[]) {
    this.permissions = this.permissions.filter(permission => !permissionsToDelete.includes(permission));

    permissionsToDelete.forEach(permission => {
      this.permissionsService.deletePermission(permission).subscribe(); 
    });
  }

  add(permission: IPermission) {
    let tmp = this.permissions;
    this.permissions = [];
    this.permissions.push(permission);
    this.permissions = this.permissions.concat(tmp);

    this.permissionsService.createPermission(permission).subscribe();
  }

}
