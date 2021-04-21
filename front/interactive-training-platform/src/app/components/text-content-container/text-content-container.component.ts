import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-content-container',
  templateUrl: './text-content-container.component.html',
  styleUrls: ['./text-content-container.component.less']
})
export class TextContentContainerComponent implements OnInit {

  @Input()
  public text: string;

  constructor() { }

  ngOnInit() {
  }

}
