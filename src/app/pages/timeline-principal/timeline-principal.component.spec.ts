import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePrincipalComponent } from './timeline-principal.component';

describe('TimelinePrincipalComponent', () => {
  let component: TimelinePrincipalComponent;
  let fixture: ComponentFixture<TimelinePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelinePrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
