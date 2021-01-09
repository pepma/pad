import { TestBed } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { ApodStateService } from './apod-state.service';


describe('ApodStateService', () => {
  let sut: ApodStateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApodStateService],
    });
    sut = TestBed.inject(ApodStateService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should set list into state ', () => {
    sut.setApodList([{ title: 'title' }]);
    const observerSpy = subscribeSpyTo(sut.list$);
    expect(observerSpy.getLastValue()[0].title).toEqual('title');
    expect(sut.list[0].title).toEqual('title');
  });
});
