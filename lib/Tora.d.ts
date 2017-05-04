/// <reference types="node" />
import { PostModelI } from './models/post';
import { EventEmitter } from 'events';
export declare class ToraI {
    readonly version: string;
    post: PostModelI;
    eventEmitter: EventEmitter;
}
declare const Tora: ToraI;
export default Tora;
