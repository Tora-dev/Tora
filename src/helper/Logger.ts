import * as winston from 'winston';

const Logger = new (winston.Logger)({
  level: 'verbose',
  transports: [
    new (winston.transports.Console)()
  ]
});

export default Logger;
