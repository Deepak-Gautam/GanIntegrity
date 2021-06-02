import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const books: Object = [
      {
        id: 11,
        title: 'Quilting For Dummies',
        authors: 'Cheryl Fall',
        publisher: 'John Wiley and Sons',
        publishedDate: '2011-03-03',
        description:
          "Get the know-how you need to create beautiful quilts and decorative quilted items Quilting is a fun hobby -- but where do you begin? From selecting fabrics and designing a quilt to stitching by hand or machine, this friendly guide shows you how to put all the pieces together -- and create a wide variety of quilted keepsakes for your home. We'll have you in stitches in no time! Discover how to * Select the right fabrics and threads * Design your masterpiece * Use quilting software * Save time with rotary cutters and other cool tools * Quilt by hand or machine * Get creative with applique",
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        isEbook: false,
      },
      {
        id: 12,
        title: 'Quilting For Dummies',
        authors: 'Cheryl Fall',
        publisher: 'John Wiley and Sons',
        publishedDate: '2011-03-03',
        description:
          "Get the know-how you need to create beautiful quilts and decorative quilted items Quilting is a fun hobby -- but where do you begin? From selecting fabrics and designing a quilt to stitching by hand or machine, this friendly guide shows you how to put all the pieces together -- and create a wide variety of quilted keepsakes for your home. We'll have you in stitches in no time! Discover how to * Select the right fabrics and threads * Design your masterpiece * Use quilting software * Save time with rotary cutters and other cool tools * Quilt by hand or machine * Get creative with applique",
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        isEbook: false,
      },
      {
        id: 12,
        title: 'Quilting For Dummies',
        authors: 'Cheryl Fall',
        publisher: 'John Wiley and Sons',
        publishedDate: '2011-03-03',
        description:
          "Get the know-how you need to create beautiful quilts and decorative quilted items Quilting is a fun hobby -- but where do you begin? From selecting fabrics and designing a quilt to stitching by hand or machine, this friendly guide shows you how to put all the pieces together -- and create a wide variety of quilted keepsakes for your home. We'll have you in stitches in no time! Discover how to * Select the right fabrics and threads * Design your masterpiece * Use quilting software * Save time with rotary cutters and other cool tools * Quilt by hand or machine * Get creative with applique",
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        isEbook: false,
      },
    ];
    return { books };
  }
  constructor() {}
}
