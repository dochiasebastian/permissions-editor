import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HeaderService } from './header.service';
import { IPermission } from '../model/permission';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
    permissions$ = new BehaviorSubject<IPermission[]>([{ _id: '', type: '', text: '' }]);

    constructor(private _headerService: HeaderService, private _http: HttpClient) { }

    getPermissions(): Observable<IPermission[]> {
        return this._http.get(`${environment.apiUrl}/permissions`, { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    this.permissions$.next(data);
                })
            );
    }
}