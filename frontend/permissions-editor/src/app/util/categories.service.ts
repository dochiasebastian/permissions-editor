import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ICategory } from '../model/category';

@Injectable({ providedIn: 'any' })
export class CategoriesService {
    category$ = new BehaviorSubject<ICategory[]>([{ _id: '', text: '' }]);

    constructor(private _http: HttpClient) { }

    getCategories(): Observable<ICategory[]> {
        return this._http.get(
            `${environment.apiUrl}/categories`,)
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
            JSON.stringify(newCategory))
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }

    deleteCategory(toDeleteCategory: ICategory): Observable<ICategory[]> {
        return this._http.delete(
            `${environment.apiUrl}/categories/delete/${toDeleteCategory._id}`)
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
            )
            .pipe(
                map((result: any) => result['data']),
                tap(data => {
                    console.log(data);
                })
            );
    }
}