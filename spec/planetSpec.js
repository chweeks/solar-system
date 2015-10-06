describe('Planet', function() {
  var earth;
  var sun;

  beforeEach(function() {
    earth = new Planet(5.97e24, 6371e3, 149.6e9);
    sun = new Sun();
  });

  it('Planet instantiated with a mass of earth', function() {
    expect(earth.mass).toBe(5.97e24);
  });

  it('Planet instantiated with radius of earth', function() {
    expect(earth.radius).toBe(6371e3);
  });

  it('#density returns correct density', function() {
    expect(earth.density()).toBe(earth.mass/((4/3)*Math.PI*Math.pow(earth.radius, 3)));
  });

  it('instantiated with a position 149 million km away from sun', function() {
    expect(earth.orbitalRadius).toEqual(149.6e9);
  });

  it('instantiated with an orbit angle of 180 degrees', function(){
    expect(earth.orbitAngle).toBe(0)
  })

  it('has a gravity of 9.8 m/s^2', function() {
    expect(((earth.gravField(earth.radius))).toFixed(1)).toBe ((9.8).toFixed(1))
  });

  it('has centripetal acceleration due to the sun', function(){
    expect(earth.acceleration(sun).toFixed(5)).toBe((5.93e-3).toFixed(5))
  });

  it('has an orbital speed around the sun', function() {
    expect((earth.velocity(sun)).toFixed(0)).toBe ('29787')
  });

  it('position changes with respect to orbital angle', function(){
     earth.orbitAngle = ((270 * Math.PI)/180);
     expect(earth.position()).toEqual([-0, -(earth.orbitalRadius)])
  });

  it('#timePeriod calculates time of a complete orbit', function(){
    expect((earth.timePeriod(sun)).toPrecision(4)).toBe('3.156e+7')
  });

  it('#addDay adds an arc day to orbit ', function(){
    earth.addDay(sun)
    expect((earth.orbitAngle).toFixed(4)).toBe('0.0172')
  });

  it('#addMonth adds an arc month to orbit', function(){
    earth.addMonth(sun)
    expect((earth.orbitAngle).toFixed(3)).toBe('0.524')
  });

  it('#addYear adds an arc year to orbit', function(){
    earth.addYear(sun)
    expect((earth.orbitAngle).toPrecision(2)).toBe((360 * Math.PI / 180).toPrecision(2))
  });

});
