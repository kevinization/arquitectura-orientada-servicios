import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { SaleI } from 'src/app/modelos/sale.interface';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales: SaleI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getSales();
  }

  editSale(sk: string) {
    this.router.navigate(['sales/edit/', sk])
  }

  deleteSale(sk:string){
    this.api.deleteSale(sk).subscribe(d =>{},err=> {
      console.log(err); 
      console.log('Venta eliminada');
      this.getSales();
    });
  }

  createSale() {
    this.router.navigate(['sales/create'])
  }

  getSales(){
    this.api.getAllSales().subscribe(data => {
      console.log(data);
      this.sales = data;
    });
  }

}
