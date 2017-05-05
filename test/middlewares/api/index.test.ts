import { expect, sandbox } from '../../helper/helper';
import * as request from 'supertest';
import { Express } from 'express';
import apiRouter from '../../../src/middlewares/api';
import * as cors from '../../../src/middlewares/cors';

describe('RESTFUL api', () => {

  afterEach(() => {
    sandbox.restore();
  });

  it('Use cors middleware', (done) => {
    const corsMiddleware = sandbox.stub(cors, 'default').callsArgAsync(2);
    request(apiRouter)
      .get('/')
      .end((err, res) => {
        if (err) done(err);
        expect(corsMiddleware).to.be.calledOnce;
        done();
      });
  });
});
