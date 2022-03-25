import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../models/character';
import { ResponseData } from '../models/responseData';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  url: string = "https://rickandmortyapi.com/api/character"
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ResponseData> {
    return this.http.get(this.url).pipe(map((value: any) => value));
  }

  getCharacter(id: number) {
    return this.http.get<Character>(this.url + "/" + id);
  }

}
