import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookslistI } from '../../modelos/bookslist.interface'
import { BookI } from 'src/app/modelos/book.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:4000/";

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BookslistI[]> {
    let direccion = this.url + "getAllBooks";
    return this.http.get<BookslistI[]>(direccion);
  }

  getBook(name: string): Observable<BookI> {
    let direccion = this.url + "getBook/" + name;
    console.log("direccion: " + direccion);
    return this.http.get<BookI>(direccion);
  }
}
