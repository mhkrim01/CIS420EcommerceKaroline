import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.css']
})
export class IndividualProductComponent implements OnInit {

  product: Product;

  constructor(private _orderService: OrderService, private _route: ActivatedRoute) {
    this._orderService.getProducts().subscribe(res => {
      let productId = this._route.snapshot.paramMap.get('ProductId');
      this._orderService.getProducts().subscribe(res => {
        this.product = res.filter(x => x.ProductId === +productId)[0];
      });
    });
   }

  ngOnInit() {
  }

  addToCart(quantity: string) {
    console.log(quantity);
    let itemToAdd = <CartItem>{
      Product: this.product,
      Quantity: parseFloat(quantity),
    };
    this._orderService.addToCart(itemToAdd);
  }

}
