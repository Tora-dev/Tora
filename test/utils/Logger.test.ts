import { expect, sandbox } from '../helper/helper';
import Logger from '../../src/utils/Logger';

describe('Logger', () => {
  it('Logs unhandled promises errors', (finish) => {
    const errorFun = sandbox.stub(Logger, 'error');
    const testerror = new Error('error');
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(testerror);
      }, 50);
    });
    setTimeout(() => {
      expect(errorFun).to.be.calledOnce.and.calledWith(testerror);
      finish();
    }, 100);
  });
});
