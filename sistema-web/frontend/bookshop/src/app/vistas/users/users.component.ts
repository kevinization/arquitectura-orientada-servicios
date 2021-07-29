import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { UserI } from 'src/app/modelos/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  editUser(sk: string) {
    this.router.navigate(['users/edit/', sk])
  }

  deleteUser(sk:string){
    this.api.deleteUser(sk).subscribe(d =>{},err=> {
      console.log(err); 
      console.log('Usuario eliminado');
      this.getUsers();
    });
  }

  createUser() {
    this.router.navigate(['users/create'])
  }

  getUsers(){
    this.api.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

}
