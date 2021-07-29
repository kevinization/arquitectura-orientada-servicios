import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/modelos/user.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: UserI = {
    pk: '', 
    sk: '', 
    name: '', 
    lastnamef: '', 
    lastnamem: '',
    password: '',
    phone: '',
    street: '',
    num: '',
    suburb: '', 
    zipcode: '',
    createdAt: '' 
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.user);
    this.apiService.createUser(this.user).subscribe();
    this.router.navigate(['/users']);
  }

}
