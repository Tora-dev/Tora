import * as winston from 'winston';

const Logger = new (winston.Logger)({
  level: 'verbose',
  transports: [
    new (winston.transports.Console)()
  ]
});

// Logs unhandled promises errors
// when no catch is attached to a promise a unhandledRejection event will be triggered
process.on('unhandledRejection', function handlePromiseRejection(reason: any) {
  Logger.error(reason);
});

export default Logger;
