describe('Planet', function() {
  var earth;
  var sun;

  beforeEach(function() {
    earth = new Planet(5.97e24, 6371e3, 149.6e9);
    sun = new Sun();
  });

  describe('Initialized', function(){

    it('Planet instantiated with a mass', function() {
      expect(earth.mass).toBe(5.97e24);
    });

    it('Planet instantiated with a radius', function() {
      expect(earth.radius).toBe(6371e3);
    });

    it('instantiated with an orbital radius', function() {
      expect(earth.orbitalRadius).toEqual(149.6e9);
    });

    it('instantiated with an orbit angle of 180 degrees', function(){
      expect(earth.orbitAngle).toBe(0)
    });

  });

  describe('#density', function(){

    it('calculates density', function() {
      expect(Math.round(earth.density())).toBe(5511);
    });

  });

  describe('acceleration', function(){

    it('calculates acceleration due to the sun', function(){
      expect(earth.acceleration(sun).toFixed(5)).toBe((5.93e-3).toFixed(5))
    });

  });

  describe('#gravField', function(){

    it('calculates surface gravity', function() {
      expect(((earth.gravField(earth.radius))).toFixed(1)).toBe((9.8).toFixed(1))
    });

  });

  describe('#velocity', function(){

    it('calculates velocity of orbit', function(){
      expect((earth.velocity(sun)).toFixed(0)).toBe ('29787')
    });

  });

  describe('#timePeriod', function(){

    it('calculates time of a complete orbit', function(){
      expect((earth.timePeriod(sun)).toPrecision(4)).toBe('3.156e+7')
    });

  });

  describe('#position, #pixelPosition', function(){

    it('position changes with respect to orbital angle', function(){
       earth.orbitAngle = ((270 * Math.PI)/180);
       expect(earth.position()).toEqual([-0, -(earth.orbitalRadius)])
    });

    it('#pixelPosition converts coords to pixel equivelant', function(){
      (earth.xPixelCoord())
      expect(earth.pixelPosition()).toEqual([1200,0])
    });

  });

  describe('#add(time)', function(){

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

});
