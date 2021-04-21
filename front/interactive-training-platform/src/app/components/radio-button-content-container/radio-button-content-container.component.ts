import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button-content-container',
  templateUrl: './radio-button-content-container.component.html',
  styleUrls: ['./radio-button-content-container.component.less']
})
export class RadioButtonContentContainerComponent implements OnInit {

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit() {

  }

}
