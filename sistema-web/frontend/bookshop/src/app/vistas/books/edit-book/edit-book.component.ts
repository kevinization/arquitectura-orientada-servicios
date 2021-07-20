import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookslistI } from 'src/app/modelos/bookslist.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  b: BookslistI[] = [];
  list: any;
  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }


  ngOnInit(): void {

    let bookSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + bookSk);

    if (bookSk === null) {
      bookSk = "null";
    } else {
      this.api.getBook(bookSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.b = this.list;
        console.log('Est:' + this.b);
      })
    }

  }

}
