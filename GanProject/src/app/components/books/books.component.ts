import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  bookList: Book[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(private _bookService: BookService, private _route: Router) {}

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(): void {
    this._bookService.getBookList().subscribe(
      (books) => {
        console.log(books);
        this.bookList = books;
      },
      (error) => {
        console.error('error caught on getting book list');
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }
  getId(id: number): void {
    this._route.navigate([`/bookdetails/${id}`]);
  }
}
