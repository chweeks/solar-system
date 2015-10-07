$( document ).ready (function() {

  var earth = new Planet(5.97e24, 6371e3, 149.6e9)
  var sun = new Sun

  $( "#addDay" ).click(function( event ) {

    earth.addDay(sun);

    $("#earth").animate({
       bottom:  earth.yPixelCoord()+'px',
       left: earth.xPixelCoord()+'px',
       top: '0px',
       right: '0px',
     });
   });
});
