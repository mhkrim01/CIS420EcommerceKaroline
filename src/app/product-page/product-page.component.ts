import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  testProd = {name: 'test'};
  products: Array<any> = [this.testProd, this.testProd, this.testProd, this.testProd, this.testProd, this.testProd]

  constructor() {
    console.log(this.products.length);
   }

  ngOnInit() {
  }

}
