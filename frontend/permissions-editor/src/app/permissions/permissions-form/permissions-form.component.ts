import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/model/category';
import { IPermission } from 'src/app/model/permission';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'app-permissions-form',
  templateUrl: './permissions-form.component.html',
  styleUrls: ['./permissions-form.component.css']
})
export class PermissionsFormComponent implements OnChanges {
  @Input() currentPermission!: IPermission;
  @Input() categories!: ICategory[];
  @Input() inEditMode = false;
  @Output() updatedPermissionEvent = new EventEmitter<IPermission>();
  @Output() addPermissionEvent = new EventEmitter<IPermission>();

  permissionsForm = new FormGroup({
    text: new FormControl('', [
      Validators.required,
      Validators.maxLength(70)
    ]),
    type: new FormControl('',[
      Validators.required
    ])
  });

  selected = 'Necessary';
  matcher = new CustomErrorStateMatcher();

  constructor() { }

  ngOnChanges(): void {
    if(this.inEditMode) {
      this.permissionsForm.get('text')!.setValue(this.currentPermission.text);
      this.selected = this.currentPermission.type;
    } else {
      this.permissionsForm.get('text')!.setValue('');
      this.selected = 'Necessary'
    }
  }

  onSubmit() {
    const newPermission: IPermission = {_id: `${this.currentPermission._id}`, type:`${this.selected}`, text: `${this.permissionsForm.get('text')!.value}`}

    if(this.inEditMode) {
      this.updatedPermissionEvent.emit(newPermission);
    } else {
      this.addPermissionEvent.emit(newPermission);
    }
  }

}
