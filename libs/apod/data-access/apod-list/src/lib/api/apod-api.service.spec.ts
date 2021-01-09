import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApodDTO } from '../model/apod.model';
import { APOD_CONFIG_TOKEN } from '../token/apod.token';
import { ApodApiService } from './apod-api.service';

describe('ApodApiService', () => {
  let sut: ApodApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApodApiService,
        {
          provide: APOD_CONFIG_TOKEN,
          useValue: {
            url: 'http:/test.com/nasa',
            daysToShow: 1,
            apiKey: '1234567890',
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });
    sut = TestBed.inject(ApodApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should get Apod', () => {
    const mockResponse: ApodDTO = {
      title: 'title',
      url: 'http://test.com/image',
    };
    sut.getApod('2020-10-10').subscribe((response) => {
      expect(response.url).toEqual('http://test.com/image');
      expect(response.title).toEqual('title');
    });
    const url = `http:/test.com/nasa?api_key=1234567890&date=2020-10-10`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
