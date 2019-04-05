import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  carrotCakeProduct = <Product>{
    ProductId: 1,
    Title: 'Layered Carrot Cake',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus orci. Suspendisse semper fringilla tellus, sed commodo metus ornare quis. Donec finibus dui egestas ante blandit aliquet. Sed varius, tortor sit amet iaculis fermentum turpis velit efficitur nisl, vel fringilla nisl dolor nec est. Donec faucibus vehicula odio eget imperdiet.',
    Price: 25.99,
    ProductType: 'carrot-cake'
  };
  chocCakeProduct = <Product>{
    ProductId: 2,
    Title: 'Chocolate Cake',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus orci. Suspendisse semper fringilla tellus, sed commodo metus ornare quis. Donec finibus dui egestas ante blandit aliquet. Sed varius, tortor sit amet iaculis fermentum turpis velit efficitur nisl, vel fringilla nisl dolor nec est. Donec faucibus vehicula odio eget imperdiet.',
    Price: 35.99,
    ProductType: 'choc-cake'
  };
  yellowCakeProduct = <Product>{
    ProductId: 3,
    Title: 'Yellow Cake',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus orci. Suspendisse semper fringilla tellus, sed commodo metus ornare quis. Donec finibus dui egestas ante blandit aliquet. Sed varius, tortor sit amet iaculis fermentum turpis velit efficitur nisl, vel fringilla nisl dolor nec est. Donec faucibus vehicula odio eget imperdiet.',
    Price: 15.99,
    ProductType: 'yellow-cake'
  };
  yellowLayeredCakeProduct = <Product>{
    ProductId: 3,
    Title: 'Yellow Layered Cake',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus orci. Suspendisse semper fringilla tellus, sed commodo metus ornare quis. Donec finibus dui egestas ante blandit aliquet. Sed varius, tortor sit amet iaculis fermentum turpis velit efficitur nisl, vel fringilla nisl dolor nec est. Donec faucibus vehicula odio eget imperdiet.',
    Price: 15.99,
    ProductType: 'yellow-cake'
  };
  carrotCupCakeProduct = <Product>{
    ProductId: 4,
    Title: 'Carrot Cake',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus orci. Suspendisse semper fringilla tellus, sed commodo metus ornare quis. Donec finibus dui egestas ante blandit aliquet. Sed varius, tortor sit amet iaculis fermentum turpis velit efficitur nisl, vel fringilla nisl dolor nec est. Donec faucibus vehicula odio eget imperdiet.',
    Price: 5.99,
    ProductType: 'vanilla-cupcake'
  };
  chocCupCakeProduct = <Product>{
    ProductId: 5,
    Title: 'Chocolate Cake',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus orci. Suspendisse semper fringilla tellus, sed commodo metus ornare quis. Donec finibus dui egestas ante blandit aliquet. Sed varius, tortor sit amet iaculis fermentum turpis velit efficitur nisl, vel fringilla nisl dolor nec est. Donec faucibus vehicula odio eget imperdiet.',
    Price: 5.99,
    ProductType: 'choc-cupcake'
  };


  defaultProducts: Array<Product> = [
    this.carrotCakeProduct,
    this.chocCakeProduct,
    this.yellowCakeProduct,
    this.chocCupCakeProduct,
    this.carrotCupCakeProduct,
    this.yellowCakeProduct,
    this.yellowLayeredCakeProduct,
    this.chocCakeProduct,
    this.carrotCupCakeProduct
  ];

  defaultCart = <Cart>{
    Items: new Array<CartItem>(),
    Total: 0
  };
  public products = new BehaviorSubject<Product[]>(this.defaultProducts);
  public cart = new BehaviorSubject<Cart>(this.defaultCart);

  getProducts(): BehaviorSubject<Product[]>{
    return this.products;
  }

  addToCart(itemToAdd: CartItem){
    this.defaultCart.Items.push(itemToAdd);
    this.cart.next(this.defaultCart);
  }

  removeFromCart(productToRemove: Product){
    this.defaultCart.Items = this.defaultCart.Items.filter(x => x.Product.Title != productToRemove.Title);
    this.cart.next(this.defaultCart);
  }

  editProduct(product: Product){
    let editedIndex = this.defaultProducts.findIndex(x => x.ProductId === product.ProductId);
    this.defaultProducts[editedIndex] = product;
    this.products.next(this.defaultProducts);
  }

}
