const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('restores durability to 100', () => {
      expect(enhancer.repair({ durability: 89 }).durability).toBe(100);
      expect(enhancer.repair({ durability: -89 }).durability).toBe(100);
      expect(enhancer.repair({ duraility: 100 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });

  describe('success()', () => {
    it('restores', ()=>{
      expect().toBe()
    })


  });

  it.todo('should have a max of 100 for durability');
});