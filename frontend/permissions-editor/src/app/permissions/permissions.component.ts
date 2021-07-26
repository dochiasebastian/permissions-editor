import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  permisisons = [
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
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
