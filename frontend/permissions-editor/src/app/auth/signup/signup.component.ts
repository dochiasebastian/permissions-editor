import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  matcher = new CustomErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
