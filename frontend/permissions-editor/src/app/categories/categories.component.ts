import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  currentCategory: { _id: string; text: string; } = {
    _id: '',
    text: ''
  };

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
      _id: '2gegrg',
      text: 'Funny'
    },
    {
      _id: '2gegrg',
      text: 'Useless'
    },
  ];

  @ViewChild('categoriesList') categoriesList: MatSelectionList| undefined;
  allSelected = false;

  constructor() { }

  ngOnInit(): void {
    this.resetCategory();
  }

  selectCategory(category: {_id: string, text: string}) {
    this.currentCategory = category;
  }

  resetCategory() {
    const emptyCategory = {
      _id: '',
      text: ''
    }

    this.currentCategory = emptyCategory;
  }

  selectAll() {
    this.allSelected = !this.allSelected;  // to control select-unselect
      
      if (this.allSelected) {
        this.categoriesList!.options.forEach( (item : MatListOption) => item.selected = true);
      } else {
        this.categoriesList!.options.forEach( (item : MatListOption) => {item.selected = false});
      }
  }

}
