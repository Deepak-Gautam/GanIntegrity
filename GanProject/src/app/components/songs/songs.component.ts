import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { Router } from '@angular/router';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  songList: Song[] = [];
  errorMessage: string = '';
  selectedSong!: Song;
  isLoading: boolean = false;
  constructor(private _songService: SongService, private _route: Router) {}

  ngOnInit(): void {
    this.getSongList();
  }

  getSongList(): void {
    this._songService.getSongList().subscribe(
      (songs) => {
        console.log(songs);
        this.songList = songs;
      },
      (error) => {
        console.error('error caught on getting book list');
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }
}
