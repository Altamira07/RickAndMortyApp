import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { fadeIn, fadeOut } from 'src/app/animations/animation';
import { Character } from 'src/app/models/character';
import { Pagination } from 'src/app/models/pagination';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class IndexComponent implements OnInit {

  listCharacters: Character[] = [];
  pagination?: Pagination;
  constructor(private service: RickandmortyService, private router: Router, private activated: ActivatedRoute) { }

  ngOnInit(): void {

    this.activated.queryParamMap.subscribe(params => {
      this.loadData(params.get('page'));
    })

  }

  loadData(page: any = 1) {
    this.service.getCharacters(page).subscribe(data => {
      this.listCharacters = data.results;
      this.pagination = data.info;
      this.toTopWindow();
    });
  }


  paginate(event: string) {
    let urlParams = event.split('?')[1];
    let params = new URLSearchParams(urlParams);
    this.router.navigate([], {
      queryParams: { page: params.get('page') }
    })
    this.service.getCharactersByPage(event).subscribe(data => {
      this.listCharacters = data.results;
      this.pagination = data.info;
      this.toTopWindow()
    });
  }

  toTopWindow() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }
}
