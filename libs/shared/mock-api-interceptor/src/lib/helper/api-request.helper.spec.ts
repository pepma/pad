import { ListErrorsService } from '../../list-errors';
import { ApiRequestHelper } from './api-request.helper';

describe('ApiRequestHelper', () => {
  it('should get URL params ', () => {
    const params = ApiRequestHelper.getUrlParams('http://test/clients?test1=2');
    expect(params.has('test1')).toEqual(true);
  });

  it('should return true when hasErrorByName ', () => {
    spyOn(ListErrorsService.getInstance(), 'has').and.returnValue(true);
    expect(ApiRequestHelper.hasErrorByName('error1')).toEqual(true);
  });
});
