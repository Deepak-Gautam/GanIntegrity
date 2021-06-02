import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  bookList: Book[] = [];
  errorMessage: string = '';
  constructor(private _bookService: BookService, private _route: Router) {}

  ngOnInit(): void {}

  getBookList(){
    
  }
}
