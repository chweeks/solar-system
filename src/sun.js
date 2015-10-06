function Sun() {
  this.mass = (1.99) * Math.pow(10, 30);
  this.radius = (696) * Math.pow(10, 6);
  this.density = (this.mass/((4/3)*Math.PI*Math.pow(this.radius, 3)))
  gravConstant = 6.67 * (Math.pow(10, -11))
};

Sun.prototype.distance = function(planet){
  return (planet.orbitalRadius)
};

Sun.prototype.gravForceOn = function(planet){
  return ((this.mass*planet.mass*(gravConstant))/(Math.pow(this.distance(planet),2)))
};
