import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/modelos/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
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
  usrSk: any;
  list: any;

  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.usrSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + this.usrSk);

    if (this.usrSk === null) {
      this.usrSk = "null";
    } else {
      this.api.getUser(this.usrSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.user = this.list;
      });
    }
  }

  save(){
    console.log("sk:" + this.usrSk);
    this.api.updateUser(this.usrSk, this.user).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/users']);
    });
  }

}
