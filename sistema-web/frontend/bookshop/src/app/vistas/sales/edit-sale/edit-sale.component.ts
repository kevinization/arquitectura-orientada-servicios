import { Component, OnInit } from '@angular/core';
import { SaleI } from 'src/app/modelos/sale.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { UserI } from 'src/app/modelos/user.interface';
import { BookI } from 'src/app/modelos/book.interface';

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent implements OnInit {

  sale: SaleI = {
    pk: '', 
    sk: '', 
    id_user: '', 
    id_book: '', 
    sale_date: '',
    amount: '',
    cost: '', 
    createdAt: '' 
  }
  saleSk: any;
  list: any;

  books: BookI[] = [];
  users: UserI[] = [];

  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.saleSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + this.saleSk);

    if (this.saleSk === null) {
      this.saleSk = "null";
    } else {
      this.api.getSale(this.saleSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.sale = this.list;
      });
    }

    this.getBooks();
    this.getUsers();
  }

  save(){
    console.log("sk:" + this.saleSk);
    this.api.updateSale(this.saleSk, this.sale).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/sales']);
    });
  }

  getUsers(){
    this.api.getAllUsers().subscribe(da => {
      this.users = da;
    });
  }

  getBooks(){
    this.api.getAllBooks().subscribe(dat => {
      this.books = dat;
    });
  }

}
