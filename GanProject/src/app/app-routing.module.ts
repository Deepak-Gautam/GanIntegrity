import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { SongsComponent } from './components/songs/songs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'songs', component: SongsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'bookdetails/:id', component: BookDetailsComponent },
  { path: 'songdetail', component: SongDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
