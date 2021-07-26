import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { EditorialI } from 'src/app/modelos/editorial.interface';

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrls: ['./editorials.component.css']
})
export class EditorialsComponent implements OnInit {

  editorials: EditorialI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getEditorials();
  }

  editEditorial(sk: string) {
    this.router.navigate(['editorials/edit/', sk])
  }

  VEditorial(sk: string) {
    this.router.navigate(['editorials/', sk])
  }

  deleteEditorial(sk:string){
    this.api.deleteEditorial(sk).subscribe(data => {
      console.log('Editorial eliminada');
      this.getEditorials();
    },
    err => console.log(err)
    );
  }

  createEditorial() {
    this.router.navigate(['editorials/create'])
  }


  getEditorials(){
    this.api.getAllEditorials().subscribe(data => {
      console.log(data)
      this.editorials = data
    })
  }



}
