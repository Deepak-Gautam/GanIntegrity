import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from '../../models/song';
import { Router } from '@angular/router';
@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  @Input() song?: Song;
  isshow: boolean = true;
  selectedSong!: Song;
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  onSelect(song: Song): void {
    this.selectedSong = song;
  }
  goBack() {
    if (this._route.url === '/home') {
      this._route.navigate(['/songs']);
    } else {
      this._route.navigate(['/home']);
    }
  }
}
