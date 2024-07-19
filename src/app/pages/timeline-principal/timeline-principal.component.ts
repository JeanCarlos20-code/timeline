import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-principal',
  templateUrl: './timeline-principal.component.html',
  styleUrl: './timeline-principal.component.scss',
  animations: [
    trigger('btnState', [
      state('normal', style({
        width: '40px',
        transform: 'scale(1)'
      })),
      state('active', style({
        width: '80px',
        transform: 'scale(1.5)'
      })),
      transition('normal => active', animate('100ms ease-in')),
      transition('active => normal', animate('100ms ease-in'))
    ])
  ]
})
export class TimelinePrincipalComponent {
  myState = 'normal';

  constructor() { }
  click() {
    console.log('click');
  }

  toggle() {
    this.myState = (this.myState === 'normal' ? 'active' : 'normal');
  }
}
