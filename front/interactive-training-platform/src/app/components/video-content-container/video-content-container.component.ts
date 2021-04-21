import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-content-container',
  templateUrl: './video-content-container.component.html',
  styleUrls: ['./video-content-container.component.less']
})
export class VideoContentContainerComponent implements OnInit {

  @Input()
  public videoLink: string;

  constructor() { }

  ngOnInit() {
  }

}
