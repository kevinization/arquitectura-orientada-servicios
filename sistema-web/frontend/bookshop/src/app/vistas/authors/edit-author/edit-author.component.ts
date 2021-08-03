import { Component, OnInit } from '@angular/core';
import { AuthorI } from 'src/app/modelos/author.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author: AuthorI = {
    pk: '', 
    sk: '', 
    name: '', 
    createdAt: ''
  }
  authSk: any;
  list: any;
  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.authSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + this.authSk);

    if (this.authSk === null) {
      this.authSk = "null";
    } else {
      this.api.getAuthor(this.authSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.author = this.list;
      });
    }
  }

  save(){
    console.log("sk:" + this.authSk);
    this.api.updateAuthor(this.authSk, this.author).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/authors']);
    });
  }

  cancel(){
    this.router.navigate(['/authors']);
  }

}
