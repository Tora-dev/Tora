import corsMiddleware from '../../src/middlewares/cors';
import { generateNext, generateReq, generateRes } from '../helper/httpHelper';
import { sandbox, expect } from '../helper/helper';
import { Request, Response, NextFunction } from 'express';

describe('cors middleware', () => {
  let res: Response;
  let req: Request;
  let next: NextFunction;

  beforeEach(() => {
    req = generateReq();
    res = generateRes();
    next = generateNext();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('sets the correct headers', () => {
    corsMiddleware(req, res, next);
    expect(res.set).to.have.been.calledWith({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type,Accept,Content-Encoding,X-Requested-With,x-api-user,' +
        'x-api-key,x-client'
    });
    expect(res.sendStatus).to.not.have.been.called;
    expect(next).to.have.been.calledOnce;
  });

  it('responds immediately if method is OPTIONS', () => {
    req.method = 'OPTIONS';
    corsMiddleware(req, res, next);
    expect(res.set).to.have.been.calledWith({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type,Accept,Content-Encoding,X-Requested-With,x-api-user,' +
        'x-api-key,x-client'
    });
    expect(res.sendStatus).to.have.been.calledWith(200);
    expect(next).to.not.have.been.called;
  });

});
