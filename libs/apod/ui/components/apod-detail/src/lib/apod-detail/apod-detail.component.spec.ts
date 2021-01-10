import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { ApodFacadeService } from '@pad/apod/data-access/apod-list';
import { mockProperty } from '@test/test-utils';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ApodDetailComponent } from './apod-detail.component';
describe('ApodDetailComponent', () => {
  let component: ApodDetailComponent;
  let fixture: ComponentFixture<ApodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodDetailComponent],
      providers: [MockProvider(ApodFacadeService)],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to back', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.clickBack();
    expect(true).toEqual(true);
  });

  it('should get item from url', () => {
    const activatedRoute = TestBed.inject(ActivatedRoute);
    const planetaryFacadeService = TestBed.inject(ApodFacadeService);
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue('2010-10-10');
    mockProperty(planetaryFacadeService, 'list$', of([{ date: '2010-10-10' }]));
    fixture.detectChanges();

    const observerSpy = subscribeSpyTo(component.item$);
    expect(observerSpy.getLastValue().date).toEqual('2010-10-10');
  });
});
