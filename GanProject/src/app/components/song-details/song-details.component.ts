import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from '../../models/song';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  @Input() song?: Song;
  isshow: boolean = true;
  selectedSong!: Song;
  constructor() {}

  ngOnInit(): void {}
  onSelect(song: Song): void {
    this.selectedSong = song;
  }
}
