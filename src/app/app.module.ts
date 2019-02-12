import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MaterialModule } from './material.module';
import { ProductPageComponent } from './my-nav/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyNavComponent, ProductPageComponent]
})
export class AppModule { }