import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderService } from '../services/order.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  items: Array<Product> = new Array<Product>();

  constructor(public cartModal: MatDialogRef<EditItemComponent>, @Inject(MAT_DIALOG_DATA) data,
    private _orderService: OrderService) {
      this.items = data.items
  }

  ngOnInit() {
  }

}
