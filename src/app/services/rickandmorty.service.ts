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

  getCharacters(page : any): Observable<ResponseData> {
    return this.http.get(this.url +"?page="+ page).pipe(map((value: any) => value));
  }

  getCharacter(id: number) {
    return this.http.get<Character>(this.url + "/" + id);
  }

  getCharactersByPage(url: string): Observable<ResponseData> {
    return this.http.get(url).pipe(map((value: any) => value));
  }

}
