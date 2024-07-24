import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, Input, Renderer2, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-block-timeline',
  templateUrl: './block-timeline.component.html',
  styleUrls: ['./block-timeline.component.scss'],
  animations: [
    trigger('btnState', [
      state('normal', style({
        transform: 'scale(1)',
      })),
      state('active', style({
        top: '5%',
      })),
      transition('normal => active', animate('100ms ease-in')),
      transition('active => normal', animate('100ms ease-in'))
    ])
  ]
})
export class BlockTimelineComponent {
  @Input() containerClass: string = '';
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() arrowClass: string = '';
  @Input() numberImageTimeline: string = '';

  myState = 'normal';
  activeIndex: number | null = null;
  indexImage: number | null = Number(this.numberImageTimeline);

  @ViewChildren('img') images: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  toggle(imageIndex: number | null): void {
    if (this.activeIndex === imageIndex) {
      this.activeIndex = null;
    } else {
      this.activeIndex = imageIndex;
    }

    console.log(this.indexImage)
  }
}
