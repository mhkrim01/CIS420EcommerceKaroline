import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { OrderService } from '../services/order.service';
import { Cart } from '../models/cart.model';
import { MatDialog } from '@angular/material';
import { PaymentPageComponent } from '..//payment-page/payment-page.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  cart: Cart = <Cart>{ Total: 0, Items: new Array<CartItem>() }

  constructor(private _orderService: OrderService, private _paymentDialog: MatDialog) {
    this._orderService.cart.subscribe(res => {
      this.cart = res;
    });
  }

  ngOnInit() {
  }

  removeItemFromCart(id: number) {
    this.cart.Items = this.cart.Items.filter(x => x.Product.ProductId !== id);
    this._orderService.cart.next(this.cart);
  }

  openPaymentPage(){
    this._paymentDialog.open(PaymentPageComponent);
  }
}
