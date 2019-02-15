import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('showSocialMedia', [
      state('true', style({ maxHeight: '40vh' })),
      state('false', style({ maxHeight: 0, display: 'none' })),
      transition('false => true', [style({ opacity: '0' }), animate('400ms 300ms')]),
      transition('true => false', animate('400ms'))
  ])]
})
export class HomeComponent implements OnInit {

  public flyIn

  constructor() {
    this.flyIn = false;
   }

  ngOnInit() {
  }

  toggleFlyIn(){
    this.flyIn = !this.flyIn;
  }
}
