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

  getBook(sk: string): Observable<BookslistI[]> {
    let direccion = this.url + "getBook/" + sk;
    console.log("direccion: " + direccion);
    return this.http.get<BookslistI[]>(direccion);
  }

  deleteBook(sk: string): Observable<BookI>{
    let direccion = this.url + "deleteBook/" +sk;
    console.log("direccion: " + direccion);
    return this.http.delete<BookI>(direccion);
  }

  updateBook(sk: string, book:any){
    let direccion = this.url + "updateBook/" + sk;
    console.log("direccion: " + direccion + "\n datos: " + book);
    return this.http.put(direccion, book);
  }

  createBook(book: any): Observable<BookI>{
    let direccion = this.url + "createBook";
    console.log("direccion: " + direccion + "\n datos: " + book);
    return this.http.post<BookI>(direccion, book);
  }
}
