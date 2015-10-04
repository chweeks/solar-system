describe('Sun', function() {
  var sun;
  var planet;

  beforeEach(function() {
    sun = new Sun();

    planet = {
      position: function() {
        return [149.6 * (Math.pow(10,9)),0];
      },
      mass: function() {
        return (5.97 * Math.pow(10,24));
      }
    };
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
    expect(sun.xDifference(planet)).toBe(149.6 * (Math.pow(10,9)));
  });

  it('#yDifference calculated between two bodies', function(){
    expect(sun.yDifference(planet)).toBe(0);
  });

  it('#distance calculated between two bodies', function(){
    expect(sun.distance(planet)).toBe(149.6 * (Math.pow(10,9)));
  });

  it('exerts a force on other planets', function(){
    expect(sun.gravForceOn(planet)).toBe(3.540707528453773 * Math.pow(10,22));
  });

});
