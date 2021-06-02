import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Song } from '../../models/song';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookList: Book[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;
  selectedSong!: Song;
  songList: Song[] = [];
  constructor(
    private _songService: SongService,
    private _bookService: BookService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getLatestBooks();
    this.getLatestSongs();
  }

  getLatestBooks(): void {
    this._bookService.getBookList().subscribe((books) => {
      this.bookList = books.slice(Math.max(books.length - 3, 0));
      console.log(this.bookList);
    });
  }
  getLatestSongs(): void {
    this._songService.getSongList().subscribe((songs) => {
      this.songList = songs.slice(Math.max(songs.length - 3, 0));
    });
  }
  getId(id: number) {
    this._route.navigate([`/bookdetail/${id}`]);
  }
  songDetail(id: number) {
    this._route.navigate([`/songdetail`]);
  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }
}
