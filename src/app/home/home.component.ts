import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('showFace', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('true => false', [
        animate('200ms ease-out')
      ]),
      transition('false => true', [
        animate('600ms ease-in')
      ])
    ]),
    trigger('showGram', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('true => false', [
        animate('300ms ease-out')
      ]),
      transition('false => true', [
        animate('400ms ease-in')
      ])
    ]),
    trigger('showTwit', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('true => false', [
        animate('500ms ease-out')
      ]),
      transition('false => true', [
        animate('200ms ease-in')
      ])
    ]),
  ]
})

export class HomeComponent implements OnInit {

  public flyIn;
  transform: number = .2;
  selectedIndex: number;

  public sliderArray = [
    {class: 'first-pic', alt: '', text:"Sweet Karoline's Cakes"},
    {class: 'second-pic', alt: '',  text: 'Highest quality ingredients'},
    {class: 'third-pic', alt: '', text: 'Life is what you bake it'},
   ];
  
  constructor() {
    this.flyIn = false;
    this.selectedIndex = 0;
  }
  
  ngOnInit() {
  }

  toggleFlyIn() {
    this.flyIn = !this.flyIn;
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }
   
   downSelected(i) {
   this.transform =  100 - 1 * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if(this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }

  
}
