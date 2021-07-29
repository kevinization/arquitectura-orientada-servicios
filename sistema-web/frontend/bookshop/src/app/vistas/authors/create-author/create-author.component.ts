import { Component, OnInit } from '@angular/core';
import { AuthorI } from 'src/app/modelos/author.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  author: AuthorI = {
    pk: '', 
    sk: '', 
    name: '', 
    createdAt: ''
  }
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.author);
    this.apiService.createAuthor(this.author).subscribe(data=>{
      console.log(data);
      console.log("Autor añadido");
      this.router.navigate(['/authors']);
    });
  }

}
