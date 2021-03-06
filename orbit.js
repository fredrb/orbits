(function(){
  var space = new Space('space');
  space.initialize();

  var mainStar = space.createStar({
    size : 12,
    style : 'yellow',
    center : true,
    speed : 4,
    glow : 8
  })
    .bind(space.createStar({
      size : 2,
      style : '#ee7e7e',
      radius : 75,
      speed : 1,
      initialAngle : 180,
      glow : 2
    }))
    .bind(space.createStar({
      size : 3.5,
      style : '#a6e278',
      radius : 140,
      speed : 1.5,
      initialAngle : 200,
      glow : 2
    }))
    .bind(space.createStar({
      size : 5,
      style : '#5baff9',
      radius : 200,
      speed : 2,
      glow : 2
    })
      .bind(space.createStar({
        size : 2,
        style : 'white',
        radius : 8,
        speed : 2
      }))
    )
    .bind(space.createStar({
      size : 4,
      style : '#ff6161',
      radius : 280,
      speed : 1.8,
      initialAngle : 300,
      glow : 2
    }))

  // asteroid fields

  for(var i = 0; i < 360; i+= Math.random() * 5) {
    mainStar.bind(space.createStar({
      size : 2,
      style : '#786750',
      radius : 360 + Math.random() * 8,
      initialAngle : i,
      speed : 1
    }));

  };

  for(var i = 0; i < 360; i+= Math.random() * 5) {
    mainStar.bind(space.createStar({
      size : 2,
      style : '#786750',
      radius : 370 + Math.random() * 8,
      initialAngle : i,
      speed : 1.2
    }));
  };

})();
