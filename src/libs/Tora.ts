import config from '../utils/conf';
import * as path from 'path';
import { default as PostModel, PostModelI } from '../models/post';
import { EventEmitter } from 'events';
import eventEmitter from './eventEmitter';

export class ToraC {
  public readonly version: string = config.get('version');
  public post: PostModelI = PostModel;
  public eventEmitter: EventEmitter = eventEmitter;
}

const Tora = new ToraC;

export default Tora;
