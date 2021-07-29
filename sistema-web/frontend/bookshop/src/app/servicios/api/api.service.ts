import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookslistI } from '../../modelos/bookslist.interface'
import { EditorialI } from 'src/app/modelos/editorial.interface';
import { SaleI } from 'src/app/modelos/sale.interface';
import { GenreI } from 'src/app/modelos/genre.interface';
import { AuthorI } from 'src/app/modelos/author.interface';
import { OrderI } from 'src/app/modelos/order.interface';
import { UserI } from 'src/app/modelos/user.interface';
import { BookI } from 'src/app/modelos/book.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:4000/";

  constructor(private http: HttpClient) { }

  //books
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

  createBook(book: any){
    let direccion = this.url + "createBook";
    console.log("direccion: " + direccion + "\n datos: " + book);
    return this.http.post(direccion, book);
  }
  
  //authors

  getAllAuthors(): Observable<AuthorI[]> {
    let direccion = this.url + "getAllAuthors";
    return this.http.get<AuthorI[]>(direccion);
  }

  getAuthor(sk: string): Observable<AuthorI[]> {
    let direccion = this.url + "getAuthor/" + sk;
    console.log("direccion: " + direccion);
    return this.http.get<AuthorI[]>(direccion);
  }

  deleteAuthor(sk: string){
    let direccion = this.url + "deleteAuthor/" +sk;
    console.log("direccion: " + direccion);
    return this.http.delete(direccion);
  }

  updateAuthor(sk: string, auth:any){
    let direccion = this.url + "updateAuthor/" + sk;
    console.log("direccion: " + direccion + "\n datos: " + auth);
    return this.http.put(direccion, auth);
  }

  createAuthor(auth: any){
    let direccion = this.url + "createAuthor";
    console.log("direccion: " + direccion + "\n datos: " + auth);
    return this.http.post(direccion, auth);
  }

  // editorials

  getAllEditorials(): Observable<EditorialI[]> {
    let direccion = this.url + "getAllEditorials";
    return this.http.get<EditorialI[]>(direccion);
  }

  getEditorial(sk: string): Observable<EditorialI[]> {
    let direccion = this.url + "getEditorial/" + sk;
    console.log("direccion: " + direccion);
    return this.http.get<EditorialI[]>(direccion);
  }

  deleteEditorial(sk: string){
    let direccion = this.url + "deleteEditorial/" +sk;
    console.log("direccion: " + direccion);
    return this.http.delete(direccion);
  }

  updateEditorial(sk: string, editorial:any){
    let direccion = this.url + "updateEditorial/" + sk;
    console.log("direccion: " + direccion + "\n datos: " + editorial);
    return this.http.put(direccion, editorial);
  }

  createEditorial(editorial: any){
    let direccion = this.url + "createEditorial";
    console.log("direccion: " + direccion + "\n datos: " + editorial);
    return this.http.post(direccion, editorial);
  }

  //genres

  getAllGenres(): Observable<GenreI[]> {
    let direccion = this.url + "getAllGenres";
    return this.http.get<GenreI[]>(direccion);
  }

  getGenre(sk: string): Observable<GenreI[]> {
    let direccion = this.url + "getGenre/" + sk;
    console.log("direccion: " + direccion);
    return this.http.get<GenreI[]>(direccion);
  }

  deleteGenre(sk: string){
    let direccion = this.url + "deleteGenre/" +sk;
    console.log("direccion: " + direccion);
    return this.http.delete(direccion);
  }

  updateGenre(sk: string, genre:any){
    let direccion = this.url + "updateGenre/" + sk;
    console.log("direccion: " + direccion + "\n datos: " + genre);
    return this.http.put(direccion, genre);
  }

  createGenre(genre: any){
    let direccion = this.url + "createGenre";
    console.log("direccion: " + direccion + "\n datos: " + genre);
    return this.http.post(direccion, genre);
  }

  //orders

  getAllOrders(): Observable<OrderI[]> {
    let direccion = this.url + "getAllOrders";
    return this.http.get<OrderI[]>(direccion);
  }

  getOrder(sk: string): Observable<OrderI[]> {
    let direccion = this.url + "getOrder/" + sk;
    console.log("direccion: " + direccion);
    return this.http.get<OrderI[]>(direccion);
  }

  deleteOrder(sk: string){
    let direccion = this.url + "deleteOrder/" +sk;
    console.log("direccion: " + direccion);
    return this.http.delete(direccion);
  }

  updateOrder(sk: string, order:any){
    let direccion = this.url + "updateOrder/" + sk;
    console.log("direccion: " + direccion + "\n datos: " + order);
    return this.http.put(direccion, order);
  }

  createOrder(order: any){
    let direccion = this.url + "createOrder";
    console.log("direccion: " + direccion + "\n datos: " + order);
    return this.http.post(direccion, order);
  }

  //sales

  getAllSales(): Observable<SaleI[]> {
    let direccion = this.url + "getAllSales";
    return this.http.get<SaleI[]>(direccion);
  }

  getSale(sk: string): Observable<SaleI[]> {
    let direccion = this.url + "getSale/" + sk;
    console.log("direccion: " + direccion);
    return this.http.get<SaleI[]>(direccion);
  }

  deleteSale(sk: string){
    let direccion = this.url + "deleteSale/" +sk;
    console.log("direccion: " + direccion);
    return this.http.delete(direccion);
  }

  updateSale(sk: string, sale:any){
    let direccion = this.url + "updateSale/" + sk;
    console.log("direccion: " + direccion + "\n datos: " + sale);
    return this.http.put(direccion, sale);
  }

  createSale(sale: any){
    let direccion = this.url + "createSale";
    console.log("direccion: " + direccion + "\n datos: " + sale);
    return this.http.post(direccion, sale);
  }

  //users

  getAllUsers(): Observable<UserI[]> {
    let direccion = this.url + "getAllUsers";
    return this.http.get<UserI[]>(direccion);
  }

  getUser(sk: string): Observable<UserI[]> {
    let direccion = this.url + "getUser/" + sk;
    console.log("direccion: " + direccion);
    return this.http.get<UserI[]>(direccion);
  }

  deleteUser(sk: string){
    let direccion = this.url + "deleteUser/" +sk;
    console.log("direccion: " + direccion);
    return this.http.delete(direccion);
  }

  updateUser(sk: string, user:any){
    let direccion = this.url + "updateUser/" + sk;
    console.log("direccion: " + direccion + "\n datos: " + user);
    return this.http.put(direccion, user);
  }

  createUser(user: any){
    let direccion = this.url + "createUser";
    console.log("direccion: " + direccion + "\n datos: " + user);
    return this.http.post(direccion, user);
  }

}
