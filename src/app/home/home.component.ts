import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('enterState', [
      state('*', style({
      transform: 'translateX(-100%)',
      opacity: 0.5
    })),
    transition(':enter', [
      animate(300, style({
        transform: 'translateX(0)',
        opacity: 1
      }))
    ])
  ])
]
})
export class HomeComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

}
