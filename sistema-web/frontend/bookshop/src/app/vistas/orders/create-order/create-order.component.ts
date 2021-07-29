import { Component, OnInit } from '@angular/core';
import { OrderI } from 'src/app/modelos/order.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { UserI } from 'src/app/modelos/user.interface';
import { BookI } from 'src/app/modelos/book.interface';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
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

  books: BookI[] = [];
  users: UserI[] = [];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
    this.getUsers();
  }

  add(){
    console.log(this.order);
    this.apiService.createOrder(this.order).subscribe();
    this.router.navigate(['/orders']);
  }

  getUsers(){
    this.apiService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  getBooks(){
    this.apiService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

}
