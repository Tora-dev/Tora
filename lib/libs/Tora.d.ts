/// <reference types="node" />
import { PostModelI } from '../models/post';
import { EventEmitter } from 'events';
export declare class ToraC {
    readonly version: string;
    post: PostModelI;
    eventEmitter: EventEmitter;
}
declare const Tora: ToraC;
export default Tora;
