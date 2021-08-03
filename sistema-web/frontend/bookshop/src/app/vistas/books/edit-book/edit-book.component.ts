import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookI } from 'src/app/modelos/book.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AuthorI } from 'src/app/modelos/author.interface';
import { GenreI } from 'src/app/modelos/genre.interface';
import { EditorialI } from 'src/app/modelos/editorial.interface';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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
  list: any;
  bookSk: any;

  authors: AuthorI[] = [];
  editorials: EditorialI[] = [];
  genres: GenreI[] = [];

  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.bookSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + this.bookSk);

    if (this.bookSk === null) {
      this.bookSk = "null";
    } else {
      this.api.getBook(this.bookSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.book = this.list;
      })
    }

    this.getAuthors();
    this.getEditorials();
    this.getGenres();

  }

  save(){
    console.log("sk:" + this.bookSk);
    this.api.updateBook(this.bookSk, this.book).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/books']);
    });
  }

  cancel(){
    this.router.navigate(['/books']);
  }

  getAuthors(){
    this.api.getAllAuthors().subscribe(data => {
      console.log(data);
      this.authors = data;
    });
  }

  getEditorials(){
    this.api.getAllEditorials().subscribe(data => {
      console.log(data);
      this.editorials = data;
    });
  }

  getGenres(){
    this.api.getAllGenres().subscribe(data => {
      console.log(data);
      this.genres = data;
    });
  }

}
