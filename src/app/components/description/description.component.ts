import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations/animation';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  animations: [
    fadeIn
  ]
})
export class DescriptionComponent implements OnInit {

  @Input()
  character?: Character;
  constructor() { }

  ngOnInit(): void {
  }

}
