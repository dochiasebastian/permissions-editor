import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './util/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Permissions Editor';
  currentUser: any = null;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.authenticationService.currentUser$.subscribe(user => this.currentUser = user);

    console.log(this.currentUser);
  }

  logout(): void {
    this.authenticationService.logout();
    location.reload();
    this.router.navigate(['/auth/login']);
  }
}
