describe('ChangeGenerator', function() {

  describe('.returnChange()', function() {

    it('returns an empty array when given nothing', function() {
      cg = new ChangeGenerator();
      expect(cg.returnChange()).toEqual([]);
    });
    it('returns an empty array when correct money is given', function() {
      cg = new ChangeGenerator('1p', '1p');
      expect(cg.returnChange()).toEqual([]);
    });
    it('returns an array with 1 when change of 1p is due', function() {
      cg = new ChangeGenerator('2p', '1p');
      expect(cg.returnChange()).toEqual([1]);
    });
    it('returns [2, 1] when given 4p and 1p', function() {
      cg = new ChangeGenerator('4p', '1p');
      expect(cg.returnChange()).toEqual([2, 1]);
    });
  });

});