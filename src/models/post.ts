import { Document, DocumentQuery, Model, model, Schema } from 'mongoose';

import { ObjectID } from 'mongodb';

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
  findOneByTitle(title: string, cb?: (err: any, res: Document & PostI) => void): DocumentQuery<Document, Document>;
}

const PostSchema = new Schema({
    title: String,
    type: String,
    date: Date,
    updateDate: Date,
    content: String,
    source: String,
    categories: [String],
    tags: [String],
});

PostSchema.statics.findOneByTitle = (title: string, cb?: any) => {
  return this.findOne({ title }, cb);
};

const PostModel = model('Post', PostSchema) as PostModelI;

export default PostModel;
