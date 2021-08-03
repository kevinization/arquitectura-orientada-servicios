import { Component, OnInit } from '@angular/core';
import { EditorialI } from 'src/app/modelos/editorial.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { OrderI } from 'src/app/modelos/order.interface';

@Component({
  selector: 'app-create-editorial',
  templateUrl: './create-editorial.component.html',
  styleUrls: ['./create-editorial.component.css']
})
export class CreateEditorialComponent implements OnInit {
  editorial: EditorialI = {
    pk: '', 
    sk: '', 
    id_order: '', 
    editorial_phone: '', 
    contact_name: '', 
    createdAt: '' 
  }
  orders: OrderI[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  add(){
    console.log(this.editorial);
    this.apiService.createEditorial(this.editorial).subscribe(data=>{
      console.log(data);
      console.log("Editorial añadida");
      this.router.navigate(['/editorials']);
    });
  }

  cancel(){
    this.router.navigate(['/editorials']);
  }

  getOrders(){
    this.apiService.getAllOrders().subscribe(data => {
      this.orders = data;
    });
  }

}
