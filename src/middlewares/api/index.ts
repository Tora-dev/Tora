import postApi from './post';
import { RequestHandler } from 'express';
import * as express from 'express';
import { Express } from 'express';

const apiRouter = express();

apiRouter.use('/post' , postApi);

export default apiRouter as Express;
