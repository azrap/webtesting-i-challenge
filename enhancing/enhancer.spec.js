const enhancer = require('./enhancer.js');
// test away!

console.log(enhancer)

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
    it('adds 1 to the enhancement', ()=>{
      expect(enhancer.success({enhancement:18}).enhancement).toBe(19)
      expect(enhancer.success({durability:18}).durability).toBe(18)
    })


  });

  it.todo('should have a max of 100 for durability');
});
