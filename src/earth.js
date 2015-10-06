function Earth() {
  this.orbitalRadius = 149.6 * (Math.pow(10,9));
  this.mass = (5.97 * Math.pow(10,24));
  this.radius = (6371 * Math.pow(10,3));
  this.density = (this.mass/((4/3)*Math.PI*Math.pow(this.radius, 3)))
  gravConstant = 6.67 * (Math.pow(10, -11))
};

Earth.prototype.mass = function(){
  this.mass
};

Earth.prototype.orbitalRadius = function(){
  this.orbitalRadius
};

Earth.prototype.gravField = function(distance){
  return ((this.mass)*(gravConstant))/(Math.pow(distance,2))
};

Earth.prototype.acceleration = function(sun){
  return ((sun.gravForceOn(this))/(this.mass))
};

Earth.prototype.velocity = function(sun){
  return (Math.sqrt((this.acceleration(sun))*(this.orbitalRadius)))
}
