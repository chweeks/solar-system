describe('Sun', function() {
  var sun;
  var earth;

  beforeEach(function() {
    sun = new Sun();
    earth = new Earth();
  });

  it('instantiated with mass of sun', function() {
    expect(sun.mass).toBe(1.99 * Math.pow(10,30));
  });

  it('instantiated with radius of sun', function() {
    expect(sun.radius).toBe(696000000);
  });

  it('instantiated with density of sun', function() {
    expect(sun.density).toBe(sun.mass/((4/3)*Math.PI*Math.pow(sun.radius, 3)));
  });

  it('instantiated with a position at center', function() {
    expect(sun.position).toEqual([0,0]);
  });

  it('#xDifference calculated between two bodies', function(){
    expect(sun.xDifference(earth)).toBe(149.6 * (Math.pow(10,9)));
  });

  it('#yDifference calculated between two bodies', function(){
    expect(sun.yDifference(earth)).toBe(0);
  });

  it('#distance calculated between two bodies', function(){
    expect(sun.distance(earth)).toBe(149.6 * (Math.pow(10,9)));
  });

  it('exerts a force on other planets', function(){
    expect(sun.gravForceOn(earth)).toBe(3.540707528453773 * Math.pow(10,22));
  });

});
