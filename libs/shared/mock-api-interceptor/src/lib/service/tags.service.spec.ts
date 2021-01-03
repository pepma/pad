import { ListErrorsService } from './list-errors';

describe('ListErrorsService', () => {
  it('should add error ', () => {
    const list = ListErrorsService.getInstance();
    list.addError('error1');
    list.addError('error2');
    expect(list.has('error1')).toEqual(true);
  });

  it('should remove error ', () => {
    const list = ListErrorsService.getInstance();
    list.addError('error1');
    list.removeError('error1');
    expect(list.has('error1')).toEqual(false);
  });

  it('should use window to set errors ', () => {
    const list = ListErrorsService.getInstance();
    window.addError('error1');
    window.removeError('error1');
    expect(list.has('error1')).toEqual(false);
  });

});
