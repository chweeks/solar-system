describe('Sun', function() {
  var sun;
  var earth;

  beforeEach(function() {
    sun = new Sun();
    earth = new Earth();
  });

  it('instantiated at the centre of the system', function(){
    expect(sun.position).toEqual([0,0])
  })

  it('instantiated with mass of sun', function() {
    expect(sun.mass).toBe(1.99 * Math.pow(10,30));
  });

  it('instantiated with radius of sun', function() {
    expect(sun.radius).toBe(696000000);
  });

  it('instantiated with density of sun', function() {
    expect(sun.density).toBe(sun.mass/((4/3)*Math.PI*Math.pow(sun.radius, 3)));
  });

  it('#distance calculated between two bodies', function(){
    expect(sun.distance(earth)).toBe(149.6 * (Math.pow(10,9)));
  });

  it('exerts a force on other planets', function(){
    expect(sun.gravForceOn(earth)).toBe(3.540707528453773 * Math.pow(10,22));
  });

});
