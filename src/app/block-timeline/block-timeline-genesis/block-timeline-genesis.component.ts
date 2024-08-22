import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-timeline-genesis',
  templateUrl: './block-timeline-genesis.component.html',
  styleUrl: './block-timeline-genesis.component.scss'
})
export class BlockTimelineGenesisComponent {
  @Input() containerClass: string = '';
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() arrowClass: string = '';
  @Input() numberImageTimeline: string = '';

  myState = 'normal';
  activeIndex: number | null = null;
  indexImage: number | null = Number(this.numberImageTimeline);

  constructor() { }

  toggle(imageIndex: number | null): void {
    if (this.activeIndex === imageIndex) {
      this.activeIndex = null;
    } else {
      this.activeIndex = imageIndex;
    }

    console.log(this.indexImage)
  }
}
