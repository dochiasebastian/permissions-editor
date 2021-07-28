import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HeaderService } from './header.service';
import { IPreference } from '../model/preference';

@Injectable({ providedIn: 'root' })
export class PreferenceService {
    preferences$ = new BehaviorSubject<IPreference[]>([]);

    constructor(private _http: HttpClient, private _headerService: HeaderService) {}

    postPreferences(preferences: IPreference[]): Observable<IPreference[]> {
        return this._http.post(
            `${environment.apiUrl}`,
            JSON.stringify(preferences),
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }
}