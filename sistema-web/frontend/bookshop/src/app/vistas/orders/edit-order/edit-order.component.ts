import { Component, OnInit } from '@angular/core';
import { OrderI } from 'src/app/modelos/order.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { UserI } from 'src/app/modelos/user.interface';
import { BookI } from 'src/app/modelos/book.interface';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  order: OrderI = {
    pk: '', 
    sk: '', 
    id_user: '', 
    id_book: '', 
    delivery_date: '',
    order_date: '',
    quantity_books: '',
    cost: '', 
    createdAt: '' 
  }
  ordSk: any;
  list: any;

  books: BookI[] = [];
  users: UserI[] = [];

  constructor(private activatedrouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.ordSk = this.activatedrouter.snapshot.paramMap.get('sk');
    console.log('hkdhfkd: ' + this.ordSk);

    if (this.ordSk === null) {
      this.ordSk = "null";
    } else {
      this.api.getOrder(this.ordSk).subscribe(data => {
        console.log(data);
        this.list = data;
        this.order = this.list;
      });
    }

    this.getUsers();
    this.getBooks();
  }

  save(){
    console.log("sk:" + this.ordSk);
    this.api.updateOrder(this.ordSk, this.order).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/orders']);
    });
  }

  getUsers(){
    this.api.getAllUsers().subscribe(d => {
      this.users = d;
    });
  }

  getBooks(){
    this.api.getAllBooks().subscribe(da => {
      this.books = da;
    });
  }

}
