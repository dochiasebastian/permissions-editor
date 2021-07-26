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
  @Output() toDeleteCategoriesEvent = new  EventEmitter<Category[]>();

  selectedOptions: Category[] = [];

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

  create() {
    this.deselectAll();
  }

  onNgModelChange(categories: Category[]){
    this.selectedOptions=categories;
  }

  selectAll() {
    this.allSelected = !this.allSelected;
      
      if (this.allSelected) {
        this.categoriesList!.options.forEach( (item : MatListOption) => item.selected = true);
      } else {
        this.deselectAll();
      }
  }

  deselectAll() {
    this.categoriesList!.options.forEach( (item : MatListOption) => {item.selected = false});
    this.resetCategory();
    this.selectedCountEvent.emit(this.categoriesList!.selectedOptions.selected.length);
  }

  deleteSelected() {
    this.toDeleteCategoriesEvent.emit(this.selectedOptions);
  }
}
