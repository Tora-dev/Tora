import Logger from '../../src/utils/Logger';
import log from '../../src/middlewares/log';
import { expect, sandbox } from '../helper';

describe('middlewares: log', () => {
  const testRep = {
    method: 'GET',
    url: 'theurl'
  };
  const testRes = {
    on: sandbox.spy()
  };

  afterEach(() => {
    sandbox.restore();
  });

  it('listen `finish` event on res and call `next()`', () => {
    const callback = sandbox.spy();
    log(testRep as any, testRes as any, callback);
    expect(callback).to.be.calledOnce;
    expect(testRes.on).to.be.calledOnce;
    expect(testRes.on.args[0][0]).to.be.deep.equal('finish');
    expect(typeof testRes.on.args[0][1] === 'function').to.be.true;
  });

  it('The time it takes to process the request processing', () => {
    const clock = sandbox.useFakeTimers(new Date().getTime());
    const callback = sandbox.spy();
    const loggerInfo = sandbox.stub(Logger, 'info');
    log(testRep as any, testRes as any, callback);
    clock.tick(100);
    testRes.on.args[0][1]();
    expect(loggerInfo).to.be.calledOnce;
    const arg = loggerInfo.args[0][0];
    const time = +arg.slice(-5, -2);
    expect(Math.abs(time - 100) < 10);
    expect(loggerInfo).to.be.calledWith(`${'GET'} ${'theurl'} -- ${time}ms`);
  });
});
