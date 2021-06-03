import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Song } from '../models/song';
import { ErrorhandlingService } from './errorhandling.service';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private baseUrl = 'api/songs';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private _http: HttpClient,
    private _errorhandling: ErrorhandlingService
  ) {}

  getSongList(): Observable<Song[]> {
    return this._http
      .get<Song[]>(this.baseUrl)
      .pipe(
        catchError(this._errorhandling.handleError<Song[]>('getSongs', []))
      );
  }
  getSongById(id: number): Observable<Song> {
    const url = `${this.baseUrl}/${id}`;
    return this._http
      .get<Song>(url)
      .pipe(
        catchError(this._errorhandling.handleError<Song>(`getsong id=${id}`))
      );
  }
  searchSong(value: string): Observable<Song[]> {
    if (!value.trim) {
      return of([]);
    } else {
      return this._http
        .get<Song[]>(`${this.baseUrl}/?artist=${value}`)
        .pipe(
          catchError(this._errorhandling.handleError<Song[]>('searchsong', []))
        );
    }
  }
}
