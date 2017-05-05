import { Router, RequestHandler } from 'express';
import PostModel from '../../models/post';

const router = Router();

router.get('*', async (req, res, next) => {
  res.json(await PostModel.find());
});

export default router as RequestHandler;
