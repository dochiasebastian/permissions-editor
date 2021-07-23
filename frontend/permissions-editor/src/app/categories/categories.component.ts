import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }
}
