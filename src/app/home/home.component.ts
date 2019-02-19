import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('showFace', [
      state('true', style({ maxHeight: '40vh' })),
      state('false', style({ maxHeight: 0, display: 'none' })),
      transition('false => true', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition('false => true', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('showGram', [
      state('true', style({ maxHeight: '40vh' })),
      state('false', style({ maxHeight: 0, display: 'none' })),
      transition('false => true', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition('false => true', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('showTwit', [
      state('true', style({ maxHeight: '40vh' })),
      state('false', style({ maxHeight: 0, display: 'none' })),
      transition('false => true', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition('false => true', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
  ]
})

export class HomeComponent implements OnInit {

  public flyIn;

  constructor() {
    this.flyIn = false;
    console.log('mike is an asshole');
  }

  ngOnInit() {
  }

  toggleFlyIn() {
    this.flyIn = !this.flyIn;
  }
}
