import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { BookI } from 'src/app/modelos/book.interface';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  
  book: BookI = {
    name: '',
    id_author: '',
    id_genre: '',
    isbn: '',
    id_editorial: '',
    description: '',
    price: ''
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.book);
    this.apiService.createBook(this.book).subscribe();
    this.router.navigate(['/books']);
  }

}
