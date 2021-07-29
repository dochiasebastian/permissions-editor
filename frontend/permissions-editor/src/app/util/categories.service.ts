import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HeaderService } from './header.service';
import { ICategory } from '../model/category';

@Injectable({ providedIn: 'any' })
export class CategoriesService {
    category$ = new BehaviorSubject<ICategory[]>([{ _id: '', text: '' }]);

    constructor(private _headerService: HeaderService, private _http: HttpClient) { }

    getCategories(): Observable<ICategory[]> {
        return this._http.get(
            `${environment.apiUrl}/categories`,
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    this.category$.next(data);
                })
            );
    }

    createCategory(newCategory: ICategory): Observable<ICategory[]> {
        return this._http.post(
            `${environment.apiUrl}/categories`,
            JSON.stringify(newCategory),
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }

    deleteCategory(toDeleteCategory: ICategory): Observable<ICategory[]> {
        return this._http.delete(
            `${environment.apiUrl}/categories/delete/${toDeleteCategory._id}`,
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }

    updateCategory(toUpdateCategory: ICategory): Observable<ICategory[]> {
        return this._http.put(
            `${environment.apiUrl}/categories/update`,
            JSON.stringify(toUpdateCategory),
            { headers: this._headerService.getHeaders() })
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }
}