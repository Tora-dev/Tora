import * as express from 'express';
import logger from '../utils/Logger';

const log: express.RequestHandler = (req, res, next) => {
  const startTime = new Date;
  res.on('finish', () => {
    const endTime = new Date;
    logger.info(`${req.method} ${req.url} -- ${endTime.getTime() - startTime.getTime()}ms`);
  });
  next();
};

export default log;
