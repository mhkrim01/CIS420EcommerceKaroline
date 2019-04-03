import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CartComponent } from '../cart/cart.component';
import { OrderService } from '../services/order.service';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {

  items: Array<CartItem> = new Array<CartItem>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private _dialog: MatDialog, 
    private _orderService: OrderService) {
  }

  ngOnInit(): void {
    this._orderService.cart.subscribe(res => {
      this.items = res.Items;
    });
  }
  
  openCartModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { items: this.items }
    this._dialog.open(CartComponent, dialogConfig);
  }
}
