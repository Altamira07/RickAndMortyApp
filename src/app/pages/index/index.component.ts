import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Pagination } from 'src/app/models/pagination';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listCharacters: Character[] = [];
  pagination?: Pagination;
  constructor(private service: RickandmortyService) { }

  ngOnInit(): void {
    this.service.getCharacters().subscribe(data => {
      this.listCharacters = data.results;
      this.pagination = data.info;
    });
  }

  paginate(event: any) {
    this.service.getCharactersByPage(event).subscribe(data => {
      this.listCharacters = data.results;
      this.pagination = data.info;
    });
  }
}
