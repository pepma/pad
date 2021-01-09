import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ApodApiService } from '../api/apod-api.service';
import { ApodService } from './apod.service';

describe('ApodService', () => {
  let sut: ApodService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApodService, MockProvider(ApodApiService)],
    });
    sut = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should get apod from api ', () => {
    const apodApiService = TestBed.inject(ApodApiService);
    spyOn(apodApiService, 'getApod').and.returnValue(of());
    sut.getApod('2020-01-01');
    expect(apodApiService.getApod).toHaveBeenCalledWith('2020-01-01');
  });

  it('should get list apod from api ', () => {
    const apodApiService = TestBed.inject(ApodApiService);
    spyOn(apodApiService, 'getApod').and.returnValue(of());
    sut.getApodList(new Date(2020, 10, 30), 3).subscribe((data) => {
      expect(data[0].date).toEqual('2020-10-30');
      expect(data[1].date).toEqual('2020-10-29');
      expect(data[2].date).toEqual('2020-10-28');
    });
    expect(apodApiService.getApod).toHaveBeenCalledTimes(3);
  });
});
