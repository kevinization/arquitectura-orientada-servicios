import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookI } from 'src/app/modelos/book.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { BooksComponent } from '../books.component';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: BookI = {
    name: '',
    id_author: '',
    id_genre: '',
    isbn: '',
    id_editorial: '',
    description: '',
    price: ''
  }
  list: any;
  price: any;
  bookSk: any;
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

  }

  save(){
    console.log("sk:" + this.bookSk);
    this.api.updateBook(this.bookSk, this.book).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/books']);
    });
  }

}
