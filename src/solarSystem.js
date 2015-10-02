function Sun() {
  this.position= [0,0,0];
  this.mass = (1.99) * Math.pow(10, 30);
  this.radius = (696) * Math.pow(10, 6);
  this.density = (this.mass/((4/3)*Math.PI*Math.pow(this.radius, 3)))
};
