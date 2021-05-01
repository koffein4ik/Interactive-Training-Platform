import {Component, Input, OnInit} from '@angular/core';

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

}
