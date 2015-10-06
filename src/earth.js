function Planet(mass, radius, orbitalRadius) {
  this.orbitAngle = (0)
  this.orbitalRadius = orbitalRadius;
  this.mass = mass;
  this.radius = radius;
  gravConstant = 6.67e-11
};

Planet.prototype.mass = function(){
  this.mass
};

Planet.prototype.orbitalRadius = function(){
  this.orbitalRadius
};

Planet.prototype.density = function(){
  return (this.mass/((4/3)*Math.PI*Math.pow(this.radius, 3)))
};

Planet.prototype.gravField = function(distance){
  return ((this.mass)*(gravConstant))/(Math.pow(distance,2))
};

Planet.prototype.acceleration = function(sun){
  return ((sun.gravForceOn(this))/(this.mass))
};

Planet.prototype.velocity = function(sun){
  return (Math.sqrt((this.acceleration(sun))*(this.orbitalRadius)))
};

Planet.prototype.position = function(){
  return [Math.round(this.xCoord()),Math.round(this.yCoord())]
};

Planet.prototype.xCoord = function(){
  return this.orbitalRadius * (Math.cos(this.orbitalAngle))
};

Planet.prototype.yCoord = function(){
  return this.orbitalRadius * (Math.sin(this.orbitalAngle))
};

Planet.prototype.timePeriod = function(sun){
  return (2 * Math.PI * (this.orbitalRadius)/(this.velocity(sun)))
};

Planet.prototype.addDay = function(){
  return  this.orbitAngle += ((360/365.25) * (Math.PI / 180))
};

Planet.prototype.addMonth = function(){
  return  this.orbitAngle += ((360/12) * (Math.PI / 180))
};
