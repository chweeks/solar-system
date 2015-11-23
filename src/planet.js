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

Planet.prototype.gravField = function(){
  return ((this.mass)*(gravConstant))/(Math.pow(this.radius,2))
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
  return this.orbitalRadius * (Math.cos(this.orbitAngle))
};

Planet.prototype.yCoord = function(){
  return this.orbitalRadius * (Math.sin(this.orbitAngle))
};

Planet.prototype.pixelPosition = function(){
  return [Math.round(this.xPixelCoord()),Math.round(this.yPixelCoord())]
};

Planet.prototype.xPixelCoord = function(){
  return ((this.xCoord()) / (124.667e6))
};

Planet.prototype.yPixelCoord = function(){
  return ((this.yCoord()) / (124.667e6))
};

Planet.prototype.timePeriod = function(sun){
  return (2 * Math.PI * (this.orbitalRadius)/(this.velocity(sun)))
};

Planet.prototype.addDay = function(sun){
  return  this.orbitAngle += ((360/this.day(sun)) * (Math.PI / 180))
};

Planet.prototype.day = function(sun){
  return this.timePeriod(sun) / (3600*24)
};

Planet.prototype.month = function(sun){
  return this.timePeriod(sun) / (3600*24*7*4.35)
};

Planet.prototype.year = function(sun){
  return this.timePeriod(sun) / (3600*24*7*52.1429)
};
