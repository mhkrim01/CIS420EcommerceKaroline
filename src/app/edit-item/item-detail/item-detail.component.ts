import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Product } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input('') item: CartItem;
  @Output() changedItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor(private _orderService: OrderService) { }

  ngOnInit() {
  }

  editItem(id: number, title: string, price: number, description: string){
    let editedProduct = <Product>{
      ProductId: id,
      Title: title,
      Price: +price,
      Description: description
    };

    this._orderService.editProduct(editedProduct);
  }

}
