import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Book } from '../../models/book';
import { Song } from '../../models/song';
import { BookService } from '../../services/book.service';
import { SongService } from '../../services/song.service';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class Searchomponent implements OnInit {
  Category: any = ['books', 'songs'];
  books$!: Observable<Book[]>;
  song$!: Observable<Song[]>;
  selected: string = '';
  // form!: FormGroup;
  selectedSong!: Song;
  isBookSelected: boolean = false;
  isSongSelected: boolean = false;
  searchTerms = new Subject<string>();
  constructor(
    private _bookService: BookService,
    private _songService: SongService,
    // public fb: FormBuilder
  ) {}

  search(value: string): void {
    if (value.length > 2) {
      this.searchTerms.next(value);
    }
  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }
  selectOption() {
    if (this.selected === 'books') {
      this.isBookSelected = true;
      this.books$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value: string) => this._bookService.searchBook(value))
      );
    } else if (this.selected === 'songs') {
      this.isSongSelected = true;
      this.song$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value: string) => this._songService.searchSong(value))
      );
    }
  }
  ngOnInit(): void {}
}
