import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { BookslistI } from 'src/app/modelos/bookslist.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BookslistI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllBooks().subscribe(data => {
      console.log(data)
      this.books = data
    })
  }

  editBook(sk: string) {
    this.router.navigate(['books/edit/', sk])
  }

  Vbook(sk: string) {
    this.router.navigate(['books/', sk])
  }

  createBook() {
    this.router.navigate(['books/create'])
  }



}
