import { Component, Input, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations/animation';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    fadeIn
  ]
})
export class CardComponent implements OnInit {

  @Input()
  character?: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
