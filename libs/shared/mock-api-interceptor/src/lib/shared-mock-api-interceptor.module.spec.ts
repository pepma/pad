import { async, TestBed } from '@angular/core/testing';
import { SharedMockApiInterceptorModule } from './shared-mock-api-interceptor.module';

describe('SharedMockApiInterceptorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedMockApiInterceptorModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedMockApiInterceptorModule).toBeDefined();
  });
});
