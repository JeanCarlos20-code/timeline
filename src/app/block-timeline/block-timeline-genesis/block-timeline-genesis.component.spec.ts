import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTimelineGenesisComponent } from './block-timeline-genesis.component';

describe('BlockTimelineGenesisComponent', () => {
  let component: BlockTimelineGenesisComponent;
  let fixture: ComponentFixture<BlockTimelineGenesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockTimelineGenesisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockTimelineGenesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
