import { PostI } from '../../src/models/post';
import * as doGenerate from '../../src/libs/generator';
import { expect, sandbox } from '../helper/helper';
import * as PostModel from '../../src/models/post';
import * as PostController from '../../src/controllers/post';
const requireAgain = require('require-again');

describe('post controllers', () => {
  let save: sinon.SinonStub;
  let PostModelStub: sinon.SinonStub;
  beforeEach(() => {
    save = sandbox.stub();
    PostModelStub = sandbox.stub(PostModel, 'default', () => {
      return {
        save
      };
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call `save()` call the `createPost()`', () => {
    const generatePost = sandbox.stub(PostController, 'generatePost');
    PostController.createPost({
      title: '',
      type: '',
      date: new Date,
      source: '',
      sourceType: '',
      content: ''
    });
    expect(PostModelStub).to.be.calledOnce;
    expect(save).to.be.calledOnce;
  });

  it('should call `doGenerate()` when post.content is not set', () => {
    const doGenerateStub = sandbox.stub(doGenerate, 'doGenerate', () => {
      return '321';
    });
    const postData: PostI = {
      title: '',
      type: '',
      date: new Date,
      source: '123',
      sourceType: '',
    };
    PostController.createPost(postData);
    expect(doGenerateStub).to.be.calledOnce;
    postData.content = '321';
    expect(PostModelStub).to.be.calledOnce.and.be.calledWith(postData);
  });
});
