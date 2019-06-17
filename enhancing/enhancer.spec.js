const enhancer = require('./enhancer.js');
// test away!

console.log(enhancer)

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('restores durability to 100', () => {
      expect(enhancer.repair({ durability: 89 }).durability).toBe(100);
      expect(enhancer.repair({ durability: -89 }).durability).toBe(100);
      expect(enhancer.repair({ duraility: 100 }).durability).toBe(100);
      expect(enhancer.repair({ duraility: 0 }).durability).toBe(100);

    });
  });

  describe('success()', () => {
    it('adds 1 to the enhancement', ()=>{

      //testing that enhancement increments correctly
      expect(enhancer.success({enhancement:18}).enhancement).toBe(19)
      expect(enhancer.success({enhancement:-18}).enhancement).toBe(-17)
      expect(enhancer.success({enhancement:0}).enhancement).toBe(1)

      //testing that durability doesn't change
      expect(enhancer.success({enhancement:18, durability:18}).durability).toBe(18)
      expect(enhancer.success({enhancement:-18, durability:0}).durability).toBe(0)
      expect(enhancer.success({enhancement:18, durability:-1}).durability).toBe(-1)

      })  
    })

  describe ('fail()', ()=> {
      it('subtracts 5 from durability if enhancement<15', ()=> {
        
    //varying enhancement
        expect(enhancer.fail({enhancement:10, durability:-1}).durability).toBe(-6)
        expect(enhancer.fail({enhancement:0, durability:-1}).durability).toBe(-6)
        expect(enhancer.fail({enhancement:-10, durability:-1}).durability).toBe(-6)

    //varying durability

        expect(enhancer.fail({enhancement:10, durability:-1}).durability).toBe(-6)
        expect(enhancer.fail({enhancement:10, durability:0}).durability).toBe(-5)
        expect(enhancer.fail({enhancement:10, durability:1}).durability).toBe(-4)
        expect(enhancer.fail({enhancement:10, durability:6}).durability).toBe(1)

    //checking that enhancement stays the same
       expect(enhancer.fail({enhancement:10, durability:-1}).enhancement).toBe(10)
     
    })

    it('subtracts 10 from durability, keep enhancement same if 14< enhancement<17', ()=> {
        
      //varying enhancement 
          expect(enhancer.fail({enhancement:15, durability:-1}).durability).toBe(-11)
          expect(enhancer.fail({enhancement:16, durability:-1}).durability).toBe(-11)

       //varying durability
          expect(enhancer.fail({enhancement:16, durability:-1}).durability).toBe(-11)
          expect(enhancer.fail({enhancement:16, durability:0}).durability).toBe(-10)
          expect(enhancer.fail({enhancement:16, durability:1}).durability).toBe(-9)
          expect(enhancer.fail({enhancement:16, durability:10}).durability).toBe(0)
          expect(enhancer.fail({enhancement:16, durability:20}).durability).toBe(10)

      //checking that enhancement stays the same
          expect(enhancer.fail({enhancement:16, durability:-1}).enhancement).toBe(16)
  
     })

    it('subtracts 10 from durability & 1 from enhancement if enhancement>16', ()=> {
         
          expect(enhancer.fail({enhancement:17, durability:-1}).durability).toBe(-11)
          expect(enhancer.fail({enhancement:17, durability:-1}).enhancement).toBe(16)
       
         
    })
  })

  // it.todo('should have a max of 100 for durability');
});
