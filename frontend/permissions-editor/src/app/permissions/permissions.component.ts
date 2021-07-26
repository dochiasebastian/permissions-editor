import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { Permission } from '../model/permission';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  currentPermission: Permission = {
    _id: '',
    type: '',
    text: ''
  };

  selectedCount = 0;

  inEditMode = false;

  permissions = [
    {
      _id: 'f32f3e2',
      type: "Necessary",
      text: "Send all your data to Mr Zuck"
    },
    {
      _id: 'f3r23r2',
      type: "Necessary",
      text: "Record and store all private interactions"
    },
    {
      _id: 'f32532e2',
      type: "Permissive",
      text: "Harvest device specifications"
    },
    {
      _id: 'fsfgd3e2',
      type: "Permissive",
      text: "Laugh at your poor life choices"
    },
    {
      _id: 'f332tfe2',
      type: "Permissive",
      text: "Send you daily monke memes"
    },
    {
      _id: 'f32gfee2',
      type: "Permissive",
      text: "Read Berserk by Kentaro Miura on your behalf"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectPermission(permission: any) {
    this.currentPermission = permission;
  }

  updatePermission(updatedPermission: any) {
    const toUpdateIndex = this.permissions.findIndex((permission: Permission) => permission._id == updatedPermission._id);

    this.permissions[toUpdateIndex].text = updatedPermission.text;
  }

  setCount(count: number) {
    this.selectedCount = count;

    if (!this.selectedCount) {
      this.inEditMode = false;
    } else {
      this.inEditMode = true;
    }
  }

  deleteItem(permissionsToDelete: Permission[] | Category[]) {
    this.permissions = this.permissions.filter(permission => !permissionsToDelete.includes(permission));
  }

  add(permission: Permission) {
    let tmp = this.permissions;
    this.permissions = [];
    this.permissions.push(permission);
    this.permissions = this.permissions.concat(tmp);
  }

}
