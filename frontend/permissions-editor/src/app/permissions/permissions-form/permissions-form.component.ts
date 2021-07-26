import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Permission } from 'src/app/model/permission';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'app-permissions-form',
  templateUrl: './permissions-form.component.html',
  styleUrls: ['./permissions-form.component.css']
})
export class PermissionsFormComponent implements OnChanges {
  @Input() currentPermission: Permission | undefined;
  @Input() inEditMode = false;
  @Output() updatedPermissionEvent = new EventEmitter<Permission>();
  @Output() addPermissionEvent = new EventEmitter<Permission>();

  permissionsForm = new FormGroup({
    text: new FormControl('', [
      Validators.required,
      Validators.maxLength(70)
    ]),
    type: new FormControl('',[
      Validators.required,
      Validators.maxLength(10)
    ])
  });

  matcher = new CustomErrorStateMatcher();

  constructor() { }

  ngOnChanges(): void {
    if(this.inEditMode) {
      this.permissionsForm.get('text')!.setValue(this.currentPermission!.text);
      this.permissionsForm.get('type')!.setValue(this.currentPermission!.type);
    } else {
      this.permissionsForm.get('text')!.setValue('');
      this.permissionsForm.get('type')!.setValue('');
    }
  }

  onSubmit() {
    const newPermission: Permission = {_id: `${this.currentPermission!._id}`, type:`${this.permissionsForm.get('type')!.value}`, text: `${this.permissionsForm.get('text')!.value}`}

    if(this.inEditMode) {
      this.updatedPermissionEvent.emit(newPermission);
    } else {
      this.addPermissionEvent.emit(newPermission);
    }
  }

}