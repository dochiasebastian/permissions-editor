import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/model/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent implements OnInit {
  @Input() categories!: ICategory[];

  constructor() { }

  ngOnInit(): void {
  }

}
