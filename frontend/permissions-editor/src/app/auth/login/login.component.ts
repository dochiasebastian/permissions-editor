import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/util/authentication.service';
import { CustomErrorStateMatcher } from 'src/app/util/customErrorStateMatcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(70)
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  matcher = new CustomErrorStateMatcher();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authenticationService.login(this.loginForm.get('email')!.value, this.loginForm.get('password')!.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['/categories']);
        this.authenticationService.getCurrentUser().subscribe();
      });
  }

}
