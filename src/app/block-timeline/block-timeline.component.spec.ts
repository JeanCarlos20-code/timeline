import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BlockTimelineComponent } from './block-timeline.component';

describe('BlockTimelineComponent', () => {
  let component: BlockTimelineComponent;
  let fixture: ComponentFixture<BlockTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockTimelineComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTimelineComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the container class', () => {
    component.containerClass = 'right-container';
    fixture.detectChanges();
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement.classes['right-container']).toBeTrue();
  });

  it('should set the image source', () => {
    component.imgSrc = './public/images/test-image.jpg';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.src).toContain('test-image.jpg');
  });

  it('should set the title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h2'));
    expect(titleElement.nativeElement.textContent).toBe('Test Title');
  });

  it('should set the text', () => {
    component.text = 'Test Text';
    fixture.detectChanges();
    const textElement = fixture.debugElement.query(By.css('p'));
    expect(textElement.nativeElement.textContent).toBe('Test Text');
  });

  it('should set the arrow class', () => {
    component.arrowClass = 'test-arrow-class';
    fixture.detectChanges();
    const spanElement = fixture.debugElement.query(By.css('span'));
    expect(spanElement.classes['test-arrow-class']).toBeTrue();
  });

  it('should add img-left class if containerClass includes right-container', () => {
    component.containerClass = 'right-container';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.classes['img-left']).toBeTrue();
  });

  it('should add img-right class if containerClass includes left-container', () => {
    component.containerClass = 'left-container';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.classes['img-right']).toBeTrue();
  });
});
