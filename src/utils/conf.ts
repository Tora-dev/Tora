import * as nconf from 'nconf';
import { join, resolve } from 'path';
import Logger from './Logger';

const PATH_TO_CONFIG = join(resolve(__dirname, '../../config.json'));

export function setupNconf(file: string = PATH_TO_CONFIG) {
  Logger.info(`Read config from ${file}.`);

  const configFile = file;

  nconf
    .argv()
    .env()
    .file({file: configFile});

  nconf.set('IS_PROD', (nconf.get('NODE_ENV') || 'development') === 'production');
  nconf.set('IS_DEV', (nconf.get('NODE_ENV') || 'development') === 'development');
}

setupNconf();

const config = nconf;

export default config;
