import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;
  constructor(
    private _bookService: BookService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getBookById();
  }
  getBookById(): void {
    const id = parseInt(this._route.snapshot.paramMap.get('id')!, 10);
    this._bookService.getBookById(id).subscribe((book) => (this.book = book));
    console.log(this.book);
  }
  goBack() {
    this._location.back();
  }
}
