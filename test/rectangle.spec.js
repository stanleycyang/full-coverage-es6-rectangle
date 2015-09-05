import chai from 'chai';
import path from 'path';

chai.should();

import Rectangle from '../rectangle';

describe('Rectangle', () => {
  describe('#width', () => {
    let rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the width', () => {
      rectangle.width.should.equal(10);
    });

    it('can be change', () => {
      rectangle.width = 30;
      rectangle.width.should.equal(30);
    });

    it('only accepts numerical values', () => {
      () => {
        rectangle.width = 'foo';
      }.should.throw(Error);
    });
  });
});
