function Sun() {
  this.position = [0,0]
  this.mass = 1.99e30;
  this.radius = 696e6;
  this.density = (this.mass/((4/3)*Math.PI*Math.pow(this.radius, 3)))
  gravConstant = 6.67e-11
};

Sun.prototype.gravForceOn = function(planet){
  return ((this.mass*planet.mass*(gravConstant))/(Math.pow(planet.orbitalRadius,2)))
};
