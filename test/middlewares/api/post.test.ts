import { Express } from 'express';
import * as express from 'express';
import { expect, sandbox } from '../../helper/helper';
import PostModel from '../../../src/models/post';
import postApiRouter from '../../../src/middlewares/api/post';
import * as request from 'supertest';

describe('post api', () => {
  let findFun: sinon.SinonStub;
  let server: Express;
  let ver: number;

  beforeEach(() => {
    ver = Math.random();
    findFun = sandbox.stub(PostModel, 'find').returns(ver);
    server = express();
    server.use(postApiRouter);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Call `PostModel.find()` when `get` "/" ', (done) => {
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(findFun).to.be.calledOnce;
        expect(parseFloat(res.text)).to.be.eql(ver);
        done();
      });
  });

});
