/// <reference types="mongoose" />
import { Document, DocumentQuery, Model } from 'mongoose';
export interface PostI {
    title: string;
    type: string;
    date: Date;
    updateDate: Date;
    content: string;
    source: string;
    categories: string[];
    tags: string[];
}
export interface PostModelI extends Model<Document> {
    new (a: PostI): Document;
    findOneByTitle(title: string, cb?: (err: any, res: Document & PostI) => void): DocumentQuery<Document, Document>;
}
declare const PostModel: PostModelI;
export default PostModel;
