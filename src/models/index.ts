import PostModel from './post';
import Tora from '../Tora';
import * as mongoose from 'mongoose';

(mongoose as any).Promise = global.Promise;

export function connectDatabase(dburl: string) {
    return new Promise((resolve, reject) => {
        mongoose.connect(dburl, (err) => {
            if (err)reject(err);
            resolve();
        });
    });
}

Tora.post = PostModel;
