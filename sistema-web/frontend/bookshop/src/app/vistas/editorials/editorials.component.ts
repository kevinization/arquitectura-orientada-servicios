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

  deleteEditorial(sk:string){
    this.api.deleteEditorial(sk).subscribe(d =>{},err=> {
      console.log(err); 
      console.log('Editorial eliminado');
      this.getEditorials();
    });
  }

  createEditorial() {
    this.router.navigate(['editorials/create'])
  }


  getEditorials(){
    this.api.getAllEditorials().subscribe(data => {
      console.log(data);
      this.editorials = data;
    });
  }



}
