import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-timeline',
  templateUrl: './block-timeline.component.html',
  styleUrl: './block-timeline.component.scss'
})
export class BlockTimelineComponent {
  @Input() containerClass: string = '';
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() arrowClass: string = '';
}
