import { expect } from '../helper';
import wait from '../../src/utils/wait';

describe('wait', () => {
  const waitTime = 50;
  it('`Resolve` should be called once after a certain period of time.', ( done ) => {
    const startTime = new Date().getTime();
    wait(waitTime).then(() => {
      expect(Math.abs(new Date().getTime() - startTime - waitTime)).to.be.lessThan(10);
      done();
    }).catch((err) => {
      done(err);
    });
  });
});
