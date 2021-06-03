import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SongService } from './song.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('SongService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: SongService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(SongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
