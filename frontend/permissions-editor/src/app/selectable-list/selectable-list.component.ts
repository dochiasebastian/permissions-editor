import { Component, Input, OnInit, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { Category } from '../model/category';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() currentCategoryEvent = new EventEmitter<Category>();
  @Output() selectedCountEvent = new EventEmitter<Number>();

  @ViewChild('categoriesList') categoriesList: MatSelectionList | undefined;
  allSelected = false;

  constructor() { }

  ngOnInit(): void {
    this.resetCategory();
  }

  selectCategory(category: {_id: string, text: string}) {
    this.currentCategoryEvent.emit(category);
    this.selectedCountEvent.emit(this.categoriesList!.selectedOptions.selected.length);
  }

  resetCategory() {
    const emptyCategory = {
      _id: '',
      text: ''
    }

    this.currentCategoryEvent.emit(emptyCategory);
  }

  selectAll() {
    this.allSelected = !this.allSelected;
      
      if (this.allSelected) {
        this.categoriesList!.options.forEach( (item : MatListOption) => item.selected = true);
      } else {
        this.categoriesList!.options.forEach( (item : MatListOption) => {item.selected = false});
      }
  }
}
