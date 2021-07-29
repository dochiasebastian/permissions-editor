import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HeaderService } from './header.service';
import { IPermission } from '../model/permission';

@Injectable({ providedIn: 'any' })
export class PermissionsService {
    permissions$ = new BehaviorSubject<IPermission[]>([{ _id: '', type: '', text: '' }]);

    constructor(private _headerService: HeaderService, private _http: HttpClient) { }

    getPermissions(): Observable<IPermission[]> {
        return this._http.get(
            `${environment.apiUrl}/permissions`,
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    this.permissions$.next(data);
                })
            );
    }

    createPermission(newPermission: IPermission): Observable<IPermission[]> {
        return this._http.post(
            `${environment.apiUrl}/permissions`,
            JSON.stringify(newPermission),
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }

    deletePermission(toDeletePermission: IPermission): Observable<IPermission[]> {
        return this._http.delete(
            `${environment.apiUrl}/permissions/delete/${toDeletePermission._id}`,
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }

    updatePermission(toUpdatePermission: IPermission): Observable<IPermission[]> {
        return this._http.put(
            `${environment.apiUrl}/permissions/update`,
            JSON.stringify(toUpdatePermission),
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }
}