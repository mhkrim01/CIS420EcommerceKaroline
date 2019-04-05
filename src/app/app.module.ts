import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductDetailComponent } from './product-page/product-detail/product-detail.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CartComponent } from './cart/cart.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { IndividualProductComponent } from './individual-product/individual-product.component';
import { OrderService } from './services/order.service';
import { CustomOrderComponent } from './custom-order/custom-order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemDetailComponent } from './edit-item/item-detail/item-detail.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProductPageComponent,
    AboutComponent,
    HomeComponent,
    ProductDetailComponent,
    ContactPageComponent,
    CartComponent,
    OrderPageComponent,
    CartItemComponent,
    IndividualProductComponent,
    CustomOrderComponent,
    OrderConfirmationComponent,
    EditItemComponent,
    ItemDetailComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent, MyNavComponent, ProductPageComponent, HomeComponent, ProductDetailComponent,
    ContactPageComponent, CartComponent, OrderPageComponent, CartItemComponent, IndividualProductComponent,
    CustomOrderComponent, OrderConfirmationComponent, EditItemComponent, ItemDetailComponent, PaymentPageComponent],
  entryComponents: [CartComponent, EditItemComponent, PaymentPageComponent]
})
export class AppModule { }