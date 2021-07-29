import { Component, OnInit } from '@angular/core';
import { SaleI } from 'src/app/modelos/sale.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { UserI } from 'src/app/modelos/user.interface';
import { BookI } from 'src/app/modelos/book.interface';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
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

  books: BookI[] = [];
  users: UserI[] = [];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
    this.getUsers();
  }

  add(){
    console.log(this.sale);
    this.apiService.createSale(this.sale).subscribe(data=>{
      console.log(data);
      console.log("Venta añadida");
      this.router.navigate(['/sales']);
    });
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
