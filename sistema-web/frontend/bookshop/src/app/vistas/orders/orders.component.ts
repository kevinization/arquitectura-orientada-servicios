import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { OrderI } from 'src/app/modelos/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: OrderI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  editOrder(sk: string) {
    this.router.navigate(['orders/edit/', sk])
  }

  deleteOrder(sk:string){
    this.api.deleteOrder(sk).subscribe(data => {
      console.log('Orden eliminada');
      this.getOrders();
    },
    err => console.log(err)
    );
  }

  createOrder() {
    this.router.navigate(['orders/create'])
  }

  getOrders(){
    this.api.getAllOrders().subscribe(data => {
      console.log(data);
      this.orders = data;
    });
  }

}
