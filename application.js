$( document ).ready (function() {

  var sun = new Sun
  var mercury = new Planet(3.3011e23, 2439.7e3, 57.91e9);
  var venus = new Planet(4.867e24, 6052e3, 108.2e9);
  var earth = new Planet(5.97e24, 6371e3, 149.6e9);
  var mars = new Planet(639e21, 3390e3, 227.9e9);
  var jupiter = new Planet(1.898e27, 69911e3, 778.5e9);
  var saturn = new Planet(568.3e24, 58232e3, 1433e9);
  var uranus = new Planet(86.81e24, 25362e3, 2877e9);
  var neptune = new Planet(102.4e24, 24622e3, 4498e9)

  $( "#simDay" ).click(function( event ) {

    mercury.addDay(sun);
    venus.addDay(sun);
    earth.addDay(sun);
    mars.addDay(sun);

    $("#mercury").animate({
       bottom:  mercury.yPixelCoord()+'px',
       left: mercury.xPixelCoord()+'px',
       top: '0px',
       right: '0px',
     }, 50);

     $("#venus").animate({
        bottom:  venus.yPixelCoord()+'px',
        left: venus.xPixelCoord()+'px',
        top: '0px',
        right: '0px',
      }, 50);

    $("#earth").animate({
       bottom:  earth.yPixelCoord()+'px',
       left: earth.xPixelCoord()+'px',
       top: '0px',
       right: '0px',
     }, 50);


   $("#mars").animate({
      bottom:  mars.yPixelCoord()+'px',
      left: mars.xPixelCoord()+'px',
      top: '0px',
      right: '0px',
    }, 50);

  });

 $( "#simYear" ).click(function( event ) {

   for(i=0; i < 365; i++){

     mercury.addDay(sun);
     venus.addDay(sun);
     earth.addDay(sun);
     mars.addDay(sun);

     $("#mercury").animate({
        bottom:  mercury.yPixelCoord()+'px',
        left: mercury.xPixelCoord()+'px',
        top: '0px',
        right: '0px',
      }, 50);

      $("#venus").animate({
         bottom:  venus.yPixelCoord()+'px',
         left: venus.xPixelCoord()+'px',
         top: '0px',
         right: '0px',
       }, 50);

     $("#earth").animate({
        bottom: earth.yPixelCoord()+'px',
        left: earth.xPixelCoord()+'px',
        top: '0px',
        right: '0px',
      }, 50);

      $("#mars").animate({
         bottom: mars.yPixelCoord()+'px',
         left: mars.xPixelCoord()+'px',
         top: '0px',
         right: '0px',
       }, 50);
    };
  });
});
