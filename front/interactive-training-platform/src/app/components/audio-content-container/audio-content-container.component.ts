import {Component, Input, OnInit} from '@angular/core';
import {Track} from "ngx-audio-player";

@Component({
  selector: 'app-audio-content-container',
  templateUrl: './audio-content-container.component.html',
  styleUrls: ['./audio-content-container.component.less']
})
export class AudioContentContainerComponent implements OnInit {

  @Input()
  public audioLink: string;

  constructor() { }

  ngOnInit() {
  }

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

// Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Audio One Artist',
    }
  ];

}
