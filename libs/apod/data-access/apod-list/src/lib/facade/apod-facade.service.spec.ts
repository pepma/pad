import { TestBed } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { mockProperty } from '@test/test-utils';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ApodService } from '../services/apod.service';
import { ApodStateService } from '../state/apod-state.service';
import { ApodFacadeService } from './apod-facade.service';

describe('ApodFacadeService', () => {
  let sut: ApodFacadeService;
  let apodService: ApodService;
  let apodStateService: ApodStateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApodFacadeService, MockProvider(ApodService), MockProvider(ApodStateService)],
    });
    sut = TestBed.inject(ApodFacadeService);
    apodService = TestBed.inject(ApodService);
    apodStateService = TestBed.inject(ApodStateService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should get all list', () => {
    spyOn(apodService, 'getApodList').and.returnValue(of([]));
    spyOn(apodStateService, 'setApodList');
    sut.getAll(new Date(2020, 10, 20), 5);
    expect(apodService.getApodList).toHaveBeenCalled();
    expect(apodStateService.setApodList).toHaveBeenCalled();
  });

  it('should get list from state', () => {
    mockProperty(apodStateService, 'list$', of([]));
    const observerSpy = subscribeSpyTo(sut.list$);
    expect(observerSpy.getLastValue()).toEqual([]);
  });

  it('should return has items to false', () => {
    mockProperty(apodStateService, 'list', []);
    expect(sut.hasItems).toEqual(false);
  });

  it('should return has items to true', () => {
    mockProperty(apodStateService, 'list', [{}]);
    expect(sut.hasItems).toEqual(true);
  });
});
