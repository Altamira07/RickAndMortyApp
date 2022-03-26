import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backbutton',
  template: `<a type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      width="24" height="24">
      <path fill-rule="evenodd"
          d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z">
      </path>
    </svg></a>`
})
export class BackbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}