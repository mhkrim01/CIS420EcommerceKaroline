import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  items: Array<CartItem> = new Array<CartItem>();

  constructor(private _orderService: OrderService) {
    this._orderService.cart.subscribe(res => {
      this.items = res.Items;
    });
   }

  ngOnInit() {
  }
}
