describe('Sun', function() {
  var sun;

  beforeEach(function() {
    sun = new Sun();
  });

  it('instantiated with a mass', function() {
    expect(sun.mass).toBe(1.99 * Math.pow(10,30));
  });

  it('instantiated with a radius', function() {
    expect(sun.radius).toBe(696000000);
  });

  it('instantiated with a density', function() {
    expect(sun.density).toBe(sun.mass/((4/3)*Math.PI*Math.pow(sun.radius, 3)));
  });

  it('instantiated with a position', function() {
    expect(sun.position).toEqual([0,0,0]);
  });

});
