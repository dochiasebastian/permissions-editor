import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IPermission } from 'src/app/model/permission';

@Component({
  selector: 'permissions-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrls: ['./permissions-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PermissionsListComponent implements OnInit {
  @Input() permissions!: IPermission[];

  constructor() { }

  ngOnInit(): void {
  }

}
