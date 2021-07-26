import { Component, OnInit, Output } from '@angular/core';
import { Category } from '../model/category';

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

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(category: Category) {
    this.currentCategory = category;
  }

  updateCategory(updatedCategory: Category) {
    console.log(updatedCategory);
    const toUpdateIndex = this.categories.findIndex((category: Category) => category._id == updatedCategory._id);

    this.categories[toUpdateIndex].text = updatedCategory.text;
  }

  setCount(count: number) {
    this.selectedCount = count;
    
    if(!this.selectedCount) {
      this.inEditMode = false;
    } else {
      this.inEditMode = true;
    }
  }

  delete(categoriesToDelete: Category[]) {
    this.categories = this.categories.filter(category => !categoriesToDelete.includes(category));
  }
}
