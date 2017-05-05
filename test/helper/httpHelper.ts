import { sandbox } from './helper';
import { Request, Response, NextFunction } from 'express';

export function generateReq(options: any = {}): Request {
  const defaultReq = {
    body: {},
    query: {},
    headers: {},
    header: sandbox.stub().returns(null),
    ...options
  };
  return defaultReq as Request;
}

export function generateRes(options: any = {}): Response {
  const defaultRes = {
    json: sandbox.stub(),
    redirect: sandbox.stub(),
    render: sandbox.stub(),
    send: sandbox.stub(),
    sendStatus: sandbox.stub().returnsThis(),
    set: sandbox.stub(),
    status: sandbox.stub().returnsThis(),
    ...options
  };

  return defaultRes as Response;
}

export function generateNext(func?: any): NextFunction {
  return func || sandbox.stub();
}
