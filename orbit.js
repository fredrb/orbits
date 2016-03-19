(function() {

  var space = new Space('space');

  // star
  space.appendAnimation({radius: 7, angle: 0}, function(context, options) {
    var coordinates = Util.circlePath(1000, 500, options.radius, options.angle);
    Draw.circle(context, 15, coordinates.x, coordinates.y, 'yellow');
    options.angle++;
  });

  // blue
  space.appendAnimation({radius: 175, angle: 0, moonAngle: 0}, function(context, options) {

    var coordinates = Util.circlePath(1000, 500, options.radius, options.angle);
    Draw.circle(context, 3, coordinates.x, coordinates.y, 'rgb(122, 110, 221)');

    var moonCoordinates = Util.circlePath(coordinates.x, coordinates.y, 10, options.moonAngle);
    Draw.circle(context, 1, moonCoordinates.x, moonCoordinates.y, 'white');

    options.angle = options.angle - 0.7;
    options.moonAngle = options.moonAngle + 3;
  });

  // red
  space.appendAnimation({radius: 300, angle: 0}, function(context, options) {
    var coordinates = Util.circlePath(1000, 500, options.radius, options.angle);
    Draw.circle(context, 4, coordinates.x, coordinates.y, 'rgb(249, 166, 140)');
    options.angle++;
  });

  // green
  space.appendAnimation({radius: 450, angle: 0, moonAngle:0, moonAngle2:0, moonAngle3:0}, function(context, options) {
    var coordinates = Util.circlePath(1000, 500, options.radius, options.angle);
    Draw.circle(context, 6, coordinates.x, coordinates.y, 'rgb(111, 221, 181)');
    options.angle = options.angle + 0.6;

    var moonCoordinates = Util.circlePath(coordinates.x, coordinates.y, 15, options.moonAngle);
    Draw.circle(context, 1, moonCoordinates.x, moonCoordinates.y, 'white');

    options.angle = options.angle - 0.7;
    options.moonAngle = options.moonAngle + 3

    var moonCoordinates2 = Util.circlePath(coordinates.x, coordinates.y, 20, options.moonAngle2);
    Draw.circle(context, 1, moonCoordinates2.x, moonCoordinates2.y, 'rgb(80, 83, 36)');

    options.angle = options.angle - 0.7;
    options.moonAngle = options.moonAngle + 3

    var moonCoordinates3 = Util.circlePath(coordinates.x, coordinates.y, 30, options.moonAngle3);
    Draw.circle(context, 1, moonCoordinates3.x, moonCoordinates3.y, 'rgb(47, 36, 27)');

    options.angle = options.angle + 1;
    options.moonAngle = options.moonAngle + 3
    options.moonAngle2 = options.moonAngle2 + 4
    options.moonAngle3 = options.moonAngle3 + 3.5
  });

  space.initialize();

})();
