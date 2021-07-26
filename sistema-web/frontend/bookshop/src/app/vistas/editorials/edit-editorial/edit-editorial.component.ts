import { Component, OnInit } from '@angular/core';
import { EditorialI } from 'src/app/modelos/editorial.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-edit-editorial',
  templateUrl: './edit-editorial.component.html',
  styleUrls: ['./edit-editorial.component.css']
})
export class EditEditorialComponent implements OnInit {
  editorial: EditorialI = {
    pk: '', 
    sk: '', 
    id_order: '', 
    editorial_phone: '', 
    contact_name: '', 
    createdAt: '' 
  }
  editSk: any;
  list: any;
  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.editSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + this.editSk);

    if (this.editSk === null) {
      this.editSk = "null";
    } else {
      this.api.getEditorial(this.editSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.editorial = this.list;
      })
    }
  }

  save(){
    console.log("sk:" + this.editSk);
    this.api.updateEditorial(this.editSk, this.editorial).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/editorials']);
    });
  }

}
