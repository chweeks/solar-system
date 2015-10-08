describe('Sun', function() {
  var sun;
  var earth;

  beforeEach(function() {
    sun = new Sun();
    earth = new Planet(5.97e24, 6371e3, 149.6e9);
  });

  describe('Initialized', function(){

    it('instantiated at the centre of the system', function(){
      expect(sun.position).toEqual([0,0])
    })

    it('instantiated with mass of sun', function() {
      expect(sun.mass).toBe(1.99e30);
    });

    it('instantiated with radius of sun', function() {
      expect(sun.radius).toBe(696e6);
    });

    it('instantiated with density of sun', function() {
      expect(sun.density).toBe(sun.mass/((4/3)*Math.PI*Math.pow(sun.radius, 3)));
    });

  });

  describe('#gravForceOn', function(){

    it('exerts a force on other planets', function(){
      expect(sun.gravForceOn(earth)).toBe(3.5407075284537737e22);
    });

  });
  
});
