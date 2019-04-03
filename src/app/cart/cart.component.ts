import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<CartItem> = new Array<CartItem>();
  total: number;

  constructor(private _router: Router, public cartModal: MatDialogRef<CartComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.items = data.items;
    this.items.forEach(x => {
      this.total += (x.Product.Price * x.Quantity);
    })
   }

  ngOnInit() {
  }

  navigateToOrder(){
    this._router.navigateByUrl('order');
    this.cartModal.close();
  }

}
