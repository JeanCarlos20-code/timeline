import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTimelineExodusComponent } from './block-timeline-exodus.component';

describe('BlockTimelineExodusComponent', () => {
  let component: BlockTimelineExodusComponent;
  let fixture: ComponentFixture<BlockTimelineExodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockTimelineExodusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockTimelineExodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
