import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchQuery} from '../entities/seach-query';
import {Observable, of, pipe} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Characters} from '../entities/character';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  charactersUrl = `${environment.baseUrl}/character`;

  constructor(private http: HttpClient) { }

  search(searchQuery: SearchQuery = null): Observable<Characters> {
    let params = new HttpParams();
    Object.keys(searchQuery).forEach(key => {
      if (searchQuery[key]) {
        params = params.append(key, searchQuery[key]);
      }
    });
    return this.http.get<Characters>(this.charactersUrl, { params })
      .pipe(catchError(() => of({results: []} as Characters))); // To simplify Error handling in this example, just return empty results
  }
}
