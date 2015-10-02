describe('Earth', function() {
  var earth;
  var sun;

  beforeEach(function() {
    earth = new Earth();
    sun = new Sun();
  });

  it('instantiated with a mass of earth', function() {
    expect(earth.mass).toBe(5.97 * Math.pow(10,24));
  });

  it('instantiated with radius of earth', function() {
    expect(earth.radius).toBe(6371000);
  });

  it('instantiated with density of earth', function() {
    expect(earth.density).toBe(earth.mass/((4/3)*Math.PI*Math.pow(earth.radius, 3)));
  });

  it('instantiated with a position 149 million km away from sun', function() {
    expect(earth.position).toEqual([149.6*(Math.pow(10,9)),0]);
  });

});
