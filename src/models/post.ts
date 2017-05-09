import { Document, DocumentQuery, Model, model, Schema } from 'mongoose';

import { ObjectID } from 'mongodb';

export interface PostI {
  title: string;
  type: string;
  date: Date;
  updateDate?: Date;
  content?: string;
  source: string;
  sourceType?: string;
  categories?: string[];
  tags?: string[];
}

export interface PostDocumentI extends PostI, Document { }

export interface PostModelI extends Model<PostDocumentI> {
  findOneByTitle(title: string, cb?: (err: any, res: PostDocumentI) => void): DocumentQuery<Document, Document>;
}

const PostSchema = new Schema({
  title: String,
  type: { type: String, default: 'Text' },
  date: { type: Date, default: Date.now },
  updateDate: Date,
  content: String,
  source: String,
  sourceType: { type: String, default: 'markdown' },
  categories: { type: [String], default: [] },
  tags: { type: [String], default: [] },
});

PostSchema.statics.findOneByTitle = (title: string, cb?: any) => {
  return this.findOne({ title }, cb);
};

const PostModel = model('Post', PostSchema) as PostModelI;

export default PostModel;
