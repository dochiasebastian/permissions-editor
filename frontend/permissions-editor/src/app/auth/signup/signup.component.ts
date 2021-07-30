import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/util/authentication.service';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  returnUrl: string = '';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.authenticationService.register(this.signupForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/categories']);
          location.reload();
        }
      );
  }

}
