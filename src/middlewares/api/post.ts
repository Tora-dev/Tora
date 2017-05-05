import { Router, RequestHandler } from 'express';
import PostModel from '../../models/post';

const postApiRouter = Router();

postApiRouter.get('*', async (req, res, next) => {
  res.set({
    'Content-Type': 'application/json'
  });
  return res.json(await PostModel.find());
});

export default postApiRouter as RequestHandler;
