import { ApiRequestHelper } from './api-request.helper';

describe('ApiRequestHelper', () => {
  it('should get URL params ', () => {
    const params = ApiRequestHelper.getUrlParams('http://test/clients?test1=2');
    expect(params.has('test1')).toEqual(true);
  });
});
