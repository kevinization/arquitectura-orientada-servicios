import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { AuthorI } from 'src/app/modelos/author.interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: AuthorI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  editAuthor(sk: string) {
    this.router.navigate(['authors/edit/', sk]);
  }

  VAuthor(sk: string) {
    this.router.navigate(['authors/', sk]);
  }

  deleteAuthor(sk:string){
    this.api.deleteAuthor(sk).subscribe(data => {
      console.log('Autor eliminado');
      this.getAuthors();
    },
    err => console.log(err)
    );
  }

  createAuthor() {
    this.router.navigate(['authors/create'])
  }

  getAuthors(){
    this.api.getAllAuthors().subscribe(data => {
      console.log(data);
      this.authors = data;
    });
  }

}
