import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MockComponents } from 'ng-mocks';
import { ApodCardComponent } from './apod-card.component';
import { ApodCardType } from './model/apod-card.model';


describe('ApodCardComponent', () => {
  let component: ApodCardComponent;
  let fixture: ComponentFixture<ApodCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodCardComponent, MockComponents(MatCard, MatCardHeader, MatCardTitle, MatCardContent)],
      imports: [],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should PreviewMode is true', () => {
    component.mode = ApodCardType.PREVIEW;
    fixture.detectChanges();
    expect(component.isPreviewMode).toEqual(true);
  });

  it('should PreviewMode is false', () => {
    component.mode = ApodCardType.DETAIL;
    fixture.detectChanges();
    expect(component.isPreviewMode).toEqual(false);
  });

  it('should emit click detail', () => {
    spyOn(component.select, 'emit');
    component.clickDetail();
    expect(component.select.emit).toHaveBeenCalled();
  });
});
