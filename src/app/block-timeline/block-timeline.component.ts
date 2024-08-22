import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, Input, Renderer2, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-block-timeline',
  templateUrl: './block-timeline.component.html',
  styleUrls: ['./block-timeline.component.scss'],
  // animations: [
  //   trigger('btnState', [
  //     state('normal', style({
  //       transform: 'scale(1)',
  //     })),
  //     state('active', style({
  //       top: '5%',
  //     })),
  //     transition('normal => active', animate('100ms ease-in')),
  //     transition('active => normal', animate('100ms ease-in'))
  //   ])
  // ]
})
export class BlockTimelineComponent {

}
