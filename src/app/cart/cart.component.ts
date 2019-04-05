import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartItem } from '../models/cart-item.model';
import { OrderService } from '../services/order.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart();
  items: Array<CartItem> = new Array<CartItem>();
  total: number = 0;

  constructor(private _router: Router, public cartModal: MatDialogRef<CartComponent>, @Inject(MAT_DIALOG_DATA) data,
    private _orderService: OrderService) {
    this.items = data.items;
    this.cart.Total = 0;
    this.cart.Items = data.items;
    this.items.forEach(x => {
      this.cart.Total += (x.Product.Price * x.Quantity);
    })
  }

  ngOnInit() {
  }

  navigateToOrder() {
    this._router.navigateByUrl('order');
    this.cartModal.close();
  }

  removeItemFromCart(idToRemove: number) {
    this.cart.Items = this.cart.Items.filter(x => x.Product.ProductId !== idToRemove);
    this._orderService.cart.next(this.cart);
  }

}
