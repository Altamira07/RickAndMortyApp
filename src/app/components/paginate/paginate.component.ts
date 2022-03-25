import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';


@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  @Input()
  pagination?: Pagination;

  @Output()
  paginateRequest: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onPreviousPage() {
    if (this.pagination?.prev)
      this.paginateRequest.emit(this.pagination?.prev);
  }

  onNextPage() {
    if (this.pagination?.next != undefined)
      this.paginateRequest.emit(this.pagination?.next);
  }
}
