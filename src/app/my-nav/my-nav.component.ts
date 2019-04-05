import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CartComponent } from '../cart/cart.component';
import { OrderService } from '../services/order.service';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {

  items: Array<CartItem> = new Array<CartItem>();
  products: Array<Product> = new Array<Product>();

  constructor(private _cartDialog: MatDialog, private _editDialog: MatDialog, 
    private _orderService: OrderService) {
  }

  ngOnInit(): void {
    this._orderService.cart.subscribe(res => {
      this.items = res.Items;
    });
    this._orderService.getProducts().subscribe(res => {
      this.products = res
    });
  }
  
  openCartModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { items: this.items };
    this._cartDialog.open(CartComponent, dialogConfig);
  }

  openEditItem(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { items: this.products };
    this._editDialog.open(EditItemComponent, dialogConfig);
  }
}
