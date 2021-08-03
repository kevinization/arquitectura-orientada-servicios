import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { BookI } from 'src/app/modelos/book.interface';
import { AuthorI } from 'src/app/modelos/author.interface';
import { GenreI } from 'src/app/modelos/genre.interface';
import { EditorialI } from 'src/app/modelos/editorial.interface';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  
  book: BookI = {
    name: '',
    sk: '',
    pk: '',
    id_author: '',
    id_genre: '',
    isbn: '',
    id_editorial: '',
    description: '',
    price: '',
    createdAt: ''
  }

  authors: AuthorI[] = [];
  editorials: EditorialI[] = [];
  genres: GenreI[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAuthors();
    this.getEditorials();
    this.getGenres();
  }

  add(){
    console.log(this.book);
    this.apiService.createBook(this.book).subscribe(data=>{
      console.log(data);
      console.log("Libro añadido");
      this.router.navigate(['/books']);
    });
  }

  cancel(){
    this.router.navigate(['/books']);
  }

  getAuthors(){
    this.apiService.getAllAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  getEditorials(){
    this.apiService.getAllEditorials().subscribe(data => {
      this.editorials = data;
    });
  }

  getGenres(){
    this.apiService.getAllGenres().subscribe(data => {
      this.genres = data;
    });
  }

}
