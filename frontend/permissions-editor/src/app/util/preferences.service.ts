import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IPreference } from '../model/preference';

@Injectable({ providedIn: 'any' })
export class PreferenceService {
    preferences$ = new BehaviorSubject<IPreference[]>([]);

    constructor(private _http: HttpClient) {}

    postPreferences(preferences: IPreference[]): Observable<IPreference[]> {
        return this._http.post(
            `${environment.apiUrl}`,
            JSON.stringify(preferences))
            .pipe(
                map((result: any) => result['data'])
            );
    }
}