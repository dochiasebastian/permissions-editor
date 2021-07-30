import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IUser } from '../model/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject$: BehaviorSubject<IUser>;
    public currentUser$: Observable<IUser>;

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
    ) {
        this.currentUserSubject$ = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser') || JSON.stringify({_id:'', username: '', email: '', role: ''})));
        this.currentUser$ = this.currentUserSubject$.asObservable();
    }

    public get currentUserValue(): IUser {
        return this.currentUserSubject$.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, JSON.stringify({ email: username, password: password }))
            .pipe(
                map(user => {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject$.next(user);
                    this.cookieService.set('user', user.token, undefined, '/');

                    return user;
                }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject$.next(null!);
        this.currentUser$ = null!;
        this.cookieService.delete('user');
        this.cookieService.deleteAll;
    }

    register(user: IUser) {
        const userJson = JSON.stringify(user);
        console.log(userJson);
        return this.http.post<any>(`${environment.apiUrl}/auth/register`, userJson);
    }

    getCurrentUser() {
        return this.http.get<any>(`${environment.apiUrl}/auth/me`,)
            .pipe(map(result => result['data']),
                tap(user => {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject$.next(user);
                    return user;
                }));
    }
}