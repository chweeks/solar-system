function Earth() {
  this.position= [149.6*(Math.pow(10,9)),0];
  this.mass = (5.97*Math.pow(10,24));
  this.radius = (6371*Math.pow(10,3));
  this.density = (this.mass/((4/3)*Math.PI*Math.pow(this.radius, 3)))
};