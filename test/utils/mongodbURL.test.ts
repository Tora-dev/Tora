import mongodbURL from '../../src/utils/mongodbURL';
import { expect } from '../helper/helper';

describe('mongodbURL', () => {
  it('build url for mongodb', () => {
    expect(mongodbURL('host', 5000, 'abc')).to.be.deep.equal('mongodb://host:5000/abc');
  });

  it('use default value', () => {
    expect(mongodbURL()).to.be.deep.equal('mongodb://localhost:27017/Tora');
  });
});
