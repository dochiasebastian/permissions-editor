import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent implements OnInit {
  @Input() categories: { _id: string; text: string; }[] = [];
  @Output() currentCategoryEvent = new EventEmitter<{ _id: string; text: string; }>();

  @ViewChild('categoriesList') categoriesList: MatSelectionList | undefined;
  allSelected = false;

  constructor() { }

  ngOnInit(): void {
    this.resetCategory();
  }

  selectCategory(category: {_id: string, text: string}) {
    this.currentCategoryEvent.emit(category);
  }

  resetCategory() {
    const emptyCategory = {
      _id: '',
      text: ''
    }

    this.currentCategoryEvent.emit(emptyCategory);
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
