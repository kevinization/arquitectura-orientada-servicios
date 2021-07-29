import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { GenreI } from 'src/app/modelos/genre.interface';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: GenreI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getGenres();
  }

  editGenre(sk: string) {
    this.router.navigate(['genres/edit/', sk])
  }

  deleteGenre(sk:string){
    this.api.deleteGenre(sk).subscribe(data => {
      console.log('Genero eliminada');
      this.getGenres();
    },
    err => console.log(err)
    );
  }

  createGenre() {
    this.router.navigate(['genres/create'])
  }

  getGenres(){
    this.api.getAllGenres().subscribe(data => {
      console.log(data);
      this.genres = data;
    });
  }

}
