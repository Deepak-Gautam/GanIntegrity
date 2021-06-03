import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../models/book';
import { ErrorhandlingService } from './errorhandling.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'api/books';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private _http: HttpClient,
    private _errorhandling: ErrorhandlingService
  ) {}

  getBookList(): Observable<Book[]> {
    return this._http
      .get<Book[]>(this.baseUrl)
      .pipe(
        catchError(this._errorhandling.handleError<Book[]>('getBooks', []))
      );
  }
  getBookById(id: number): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this._http
      .get<Book>(url)
      .pipe(
        catchError(this._errorhandling.handleError<Book>(`getbook id=${id}`))
      );
  }
  searchBook(value: string): Observable<Book[]> {
    if (!value.trim) {
      return of([]);
    } else {
      return this._http
        .get<Book[]>(`${this.baseUrl}/?title=${value}`)
        .pipe(
          catchError(this._errorhandling.handleError<Book[]>('searchBook', []))
        );
    }
  }
}
