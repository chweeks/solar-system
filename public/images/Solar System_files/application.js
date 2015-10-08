$( document ).ready (function() {

  var sun = new Sun
  var earth = new Planet(5.97e24, 6371e3, 149.6e9)
  var mars = new Planet(639e21, 3390e3, 227.9e6)

  $( "#simDay" ).click(function( event ) {

    earth.addDay(sun);

    $("#earth").animate({
       bottom:  earth.yPixelCoord()+'px',
       left: earth.xPixelCoord()+'px',
       top: '0px',
       right: '0px',
     }, 50);
   });

   $("#mars").animate({
      bottom:  earth.yPixelCoord()+'px',
      left: earth.xPixelCoord()+'px',
      top: '0px',
      right: '0px',
    }, 50);

   $( "#simYear" ).click(function( event ) {

     for(i=0; i < 365; i++){

       earth.addDay(sun);
       mars.addDay(sun);

       $("#earth").animate({
          bottom: earth.yPixelCoord()+'px',
          left: earth.xPixelCoord()+'px',
          top: '0px',
          right: '0px',
        }, 1);

        $("#mars").animate({
           bottom: mars.yPixelCoord()+'px',
           left: mars.xPixelCoord()+'px',
           top: '0px',
           right: '0px',
         }, 1);
      };
    });
});
