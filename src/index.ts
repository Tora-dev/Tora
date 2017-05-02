import 'babel-polyfill';
import * as express from 'express';
import Logger from './helper/Logger';
import wait from './utils/wait';

const app = express();

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  Logger.info('Example app listening at http://%s:%s', host, port);
});
