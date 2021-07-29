import { Component, OnInit } from '@angular/core';
import { GenreI } from 'src/app/modelos/genre.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  genre: GenreI = {
    pk: '', 
    sk: '', 
    name: '', 
    createdAt: ''
  }
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.genre);
    this.apiService.createGenre(this.genre).subscribe();
    this.router.navigate(['/genres']);
  }

}
