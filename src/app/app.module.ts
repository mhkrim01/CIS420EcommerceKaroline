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

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProductPageComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, MyNavComponent, ProductPageComponent, HomeComponent]
})
export class AppModule { }