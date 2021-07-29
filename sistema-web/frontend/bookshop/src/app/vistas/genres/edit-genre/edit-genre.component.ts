import { Component, OnInit } from '@angular/core';
import { GenreI } from 'src/app/modelos/genre.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {
  genre: GenreI = {
    pk: '', 
    sk: '', 
    name: '', 
    createdAt: ''
  }
  genSk: any;
  list: any;
  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.genSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + this.genSk);

    if (this.genSk === null) {
      this.genSk = "null";
    } else {
      this.api.getGenre(this.genSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.genre = this.list;
      });
    }
  }

  save(){
    console.log("sk:" + this.genSk);
    this.api.updateGenre(this.genSk, this.genre).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/genres']);
    });
  }

}
