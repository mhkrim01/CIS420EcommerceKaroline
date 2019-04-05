import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private paymentDialog: MatDialogRef<PaymentPageComponent>, private _router: Router) { }

  ngOnInit() {
  }

  closeModal(){
    this.paymentDialog.close();
    this._router.navigateByUrl('/home');
  }
  
}
