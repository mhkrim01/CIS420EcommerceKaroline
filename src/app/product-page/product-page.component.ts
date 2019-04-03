import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  isHovering: boolean = false;
  products: Array<Product> = new Array<Product>();

  constructor(private _router: Router, private _orderService: OrderService) {
    this._orderService.getProducts().subscribe(res => {
      this.products = res;
    })
   }

  ngOnInit() {
  }

  
  navigateToProducts(){
    this._router.navigateByUrl('/products');
  }
}
