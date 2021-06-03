import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { SongsComponent } from './components/songs/songs.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ButtonComponent } from './components/button/button.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { Searchomponent } from './components/search/search.component';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BooksComponent,
    SongsComponent,
    ButtonComponent,
    BookDetailsComponent,
    PageNotFoundComponent,
    SongDetailsComponent,
    Searchomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
