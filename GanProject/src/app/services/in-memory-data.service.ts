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
        title: 'Quilting with Strips and Strings',
        authors: 'Helen Whitson Rose',
        publisher: 'Courier Corporation',
        publishedDate: '2012-03-03',
        description:
          'Quickest, easiest way to turn left-over fabric into handsome quilt. 46 patchwork quilts; 31 full-size templates.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=98Air5iXd7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        isEbook: false,
      },
      {
        id: 13,
        title: "Beginner's Guide to Quilting",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2013-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=hU8uuQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        isEbook: false,
      },
      {
        id: 14,
        title: "Beginner's Guide to Quilting",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2014-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=KtrATnRZOlMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        isEbook: false,
      },
      {
        id: 15,
        title: "Beginner's Guide to Quilting",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2015-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=T0o8uQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        isEbook: false,
      },
      {
        id: 16,
        title: "Beginner's Guide to Quilting",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2016-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=T0o8uQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        isEbook: false,
      },
      {
        id: 17,
        title: "Beginner's Guide to Quilting",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2017-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=xt_-qyFy2PIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        isEbook: false,
      },
      {
        id: 18,
        title: "Beginner's Guide to Quilting",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2018-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=2UGSrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        isEbook: false,
      },
      {
        id: 19,
        title: "Beginner's Guide to Quilting",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2019-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=bw35nwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        isEbook: false,
      },
      {
        id: 20,
        title: "Beginner's Guide to Quiltingtest",
        authors: 'Elizabeth Betts',
        publisher: 'David & Charles',
        publishedDate: '2020-03-03',
        description:
          'Learn how to make beautiful quilts with this comprehensive guide to patchwork and quilting for beginners. Covers all aspects of quilting from piecing and applique to quilting and binding. Choose from 16 simple projects, each focusing on a different technique, from bags and cushions to table mats, wall hangings and bed quilts.Clear illustrations and step-by-step instructions accompany each project, making them all suitable for even a complete novice. The book also includes a quilting glossary explaining common quilting and sewing terms.',
        type: 'ISBN_10',
        categories: 'Crafts and Hobbies',
        averageRating: 5,
        pageCount: 384,
        imageLinks:
          'http://books.google.com/books/content?id=Jr8gtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        isEbook: false,
      },
    ];
    const songs: Object = [
      {
        id: 1,
        artist: 'Bon Jovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        releasedDate: '2010-10-22',
        Duration: '2.5 minutes',
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug.',
      },
      {
        id: 2,
        artist: 'Bon Jovfdfi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        releasedDate: '2010-10-22',
        success: true,
        Duration: '2.5 minutes',
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 3,
        artist: 'Bon Jovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        releasedDate: '2010-10-22',
        Duration: '2.5 minutes',
        success: true,
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 4,
        artist: 'Bon Jovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        releasedDate: '2010-10-22',
        Duration: '2.5 minutes',
        success: true,
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 5,
        artist: 'Bon Jovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        releasedDate: '2010-10-22',
        success: true,
        Duration: '2.5 minutes',
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 6,
        artist: 'Bon Jovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        releasedDate: '2010-10-22',
        Duration: '2.5 minutes',
        success: true,
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 7,
        artist: 'Bon Jovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        releasedDate: '2010-10-22',
        Duration: '2.5 minutes',
        success: true,
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 8,
        artist: 'Bon Jovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        Duration: '2.5 minutes',
        releasedDate: '2010-10-22',
        success: true,
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 9,
        artist: 'Bon Jcxzcxczxcovi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        Duration: '2.5 minutes',
        releasedDate: '2010-10-22',
        success: true,
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
      {
        id: 10,
        artist: 'Bon Jocxcvi',
        music: "Livin' on a prayer",
        album: 'This is for test',
        Duration: '2.5 minutes',
        releasedDate: '2010-10-22',
        success: true,
        rating: 5,
        composers: 'Bon Jovi',
        genere: 'Rock',
        producers: 'Taylor Swift',
        writers: 'Alessandro Trincone',
        description:
          'Few rappers played more convincingly or compellingly with either identity or gender over the course of the 2010s as Young Thug. ',
      },
    ];
    return { books, songs };
  }
  constructor() {}
}
