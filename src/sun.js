function Sun() {
  this.position= [0,0];
  this.mass = (1.99) * Math.pow(10, 30);
  this.radius = (696) * Math.pow(10, 6);
  this.density = (this.mass/((4/3)*Math.PI*Math.pow(this.radius, 3)))
  gravConstant = 6.67 * (Math.pow(10, -11))
};

Sun.prototype.xDifference = function(planet){
  return Math.abs((this.position[0]) - (planet.position[0]))
};

Sun.prototype.yDifference = function(planet){
  return Math.abs((this.position[1]) - (planet.position[1]))
};

Sun.prototype.distance = function(planet){
  return Math.sqrt(Math.pow(this.xDifference(planet),2) + Math.pow(this.yDifference(planet),2))
};

Sun.prototype.gravForceOn = function(planet){
  return ((this.mass*planet.mass*(gravConstant))/(Math.pow(this.distance(planet),2)))
};
