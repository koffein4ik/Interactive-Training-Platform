import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-content-container',
  templateUrl: './image-content-container.component.html',
  styleUrls: ['./image-content-container.component.less']
})
export class ImageContentContainerComponent implements OnInit {

  @Input()
  public imageLink: string;

  constructor() { }

  ngOnInit() {
  }

}
