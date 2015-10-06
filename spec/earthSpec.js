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
    expect(earth.orbitalRadius).toEqual(149.6*(Math.pow(10,9)));
  });

  it('instantiated with an orbit angle of 180 degrees', function(){
    expect(earth.orbitAngle).toBe(0)
  })

  it('has a gravity of 9.8 m/s^2', function() {
    expect(((earth.gravField(earth.radius))).toFixed(1)).toBe ((9.8).toFixed(1))
  });

  it('has centripetal acceleration due to the sun', function(){
    expect(earth.acceleration(sun).toFixed(5)).toBe ((5.93*(Math.pow(10,-3))).toFixed(5))
  });

  it('has an orbital speed around the sun', function() {
    expect((earth.velocity(sun)).toFixed(0)).toBe ('29787')
  });

  it('position chenges with respect to orbital angle', function(){
     earth.orbitalAngle = ((270 * Math.PI)/180);
     expect(earth.position()).toEqual([-0, -(earth.orbitalRadius)])
  });

  it('#addDay adds an arc day to orbit ', function(){
    earth.addDay()
    expect((earth.orbitAngle).toFixed(4)).toBe('0.0172')
  });

  it('#addMonth adds an arc month to orbit', function(){
    earth.addMonth()
    expect((earth.orbitAngle).toFixed(3)).toBe('0.524')
  });

});
