import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  character?: Character;
  constructor(private route: ActivatedRoute, private service: RickandmortyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getCharacter(params['id']).subscribe(data => {
        this.character = data
      });
    });

  }
}
