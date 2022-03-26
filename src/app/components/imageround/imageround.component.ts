import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations/animation';

@Component({
  selector: 'app-imageround',
  templateUrl: './imageround.component.html',
  styleUrls: ['./imageround.component.css'],
  animations: [
    fadeIn
  ]
})
export class ImageroundComponent implements OnInit {

  @Input()
  url?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
