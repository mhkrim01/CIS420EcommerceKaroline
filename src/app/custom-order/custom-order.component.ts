import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-order',
  templateUrl: './custom-order.component.html',
  styleUrls: ['./custom-order.component.css']
})
export class CustomOrderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  displaySuccess(){
    this._router.navigateByUrl('/success');
  }

}
