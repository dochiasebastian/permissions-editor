import { Component, OnInit, Output } from '@angular/core';
import { Category } from '../model/category';
import { Permission } from '../model/permission';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  currentCategory: Category = {
    _id: '',
    text: ''
  };
  selectedCount = 0;

  inEditMode = false;

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

  selectedPermissions: Permission[] = [];

  permissions: Permission[] = [
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

  selectCategory(category: Category) {
    this.currentCategory = category;
    if(category.text === "All") {
      this.selectedPermissions = this.permissions;
    } else {
      this.selectedPermissions = this.permissions.filter(permission => permission.type == category.text); 
    }
  }

  updateCategory(updatedCategory: Category) {
    const toUpdateIndex = this.categories.findIndex((category: Category) => category._id == updatedCategory._id);

    this.categories[toUpdateIndex].text = updatedCategory.text;
  }

  setCount(count: number) {
    this.selectedCount = count;

    if (!this.selectedCount) {
      this.inEditMode = false;
    } else {
      this.inEditMode = true;
    }
  }

  deleteItem(categoriesToDelete: Category[]) {
    this.categories = this.categories.filter(category => !categoriesToDelete.includes(category));
  }

  add(category: Category) {
    let tmp = this.categories;
    this.categories = [];
    this.categories.push(category);
    this.categories = this.categories.concat(tmp);
  }

}
