import { Component, Input, OnInit, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { ICategory } from '../model/category';
import { IPermission } from '../model/permission';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent implements OnInit {
  @Input() list: ICategory[] | IPermission[] = [];
  @Input() title: string = 'Title';
  @Output() currentItemEvent = new EventEmitter<ICategory | IPermission>();
  @Output() selectedCountEvent = new EventEmitter<Number>();
  @Output() toDeleteItemsEvent = new EventEmitter<any []>();

  selectedOptions: ICategory[] | IPermission[] = [];

  @ViewChild('itemsList') itemsList: MatSelectionList | undefined;
  allSelected = false;

  constructor() { }

  ngOnInit(): void {
    this.resetItem();
  }

  selectItem(category: ICategory) {
    this.currentItemEvent.emit(category);
    this.selectedCountEvent.emit(this.itemsList!.selectedOptions.selected.length);
  }

  resetItem() {
    const emptyCategory = {
      _id: '',
      text: ''
    }

    this.currentItemEvent.emit(emptyCategory);
  }

  create() {
    this.deselectAll();
  }

  onNgModelChange(categories: ICategory[]) {
    this.selectedOptions = categories;
  }

  selectAll() {
    this.allSelected = !this.allSelected;

    if(!this.selectedOptions.length) {
      this.toggleSelectedState(true);
      return;
    }

    if (this.allSelected && this.selectedOptions.length !== this.list.length) {
      this.toggleSelectedState(true);
    } else {
      this.deselectAll();
    }
  }

  toggleSelectedState(state: boolean) {
    this.itemsList!.options.forEach((item: MatListOption) => item.selected = state);
  }

  deselectAll() {
    this.toggleSelectedState(false);
    this.resetItem();
    this.selectedCountEvent.emit(this.itemsList!.selectedOptions.selected.length);
  }

  deleteSelected() {
    this.toDeleteItemsEvent.emit(this.selectedOptions);
    this.deselectAll();
  }
}
