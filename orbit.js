function Space(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.context = this.canvas.getContext("2d");

  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;

  this.context.shadowBlur = 15
  this.context.shadowColor = 'white';
  this.context.shadowOffsetX = 0;
  this.context.shadowOffsetY = 0;

  this.drawQueue = [];
};

Space.prototype.clear = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Space.prototype._loop_ = function() {
  this.clear();
  this.drawQueue.forEach(function(d) { d.fn(this.context, d.param) }.bind(this));
};

Space.prototype.initialize = function() {
  setInterval(this._loop_.bind(this), 20);
}

Space.prototype.appendAnimation = function(animationParam, animationFn) {
  this.drawQueue.push({
    fn : animationFn,
    param: animationParam
  });
};

function circlePath(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

(function() {

  var space = new Space('space');

  space.appendAnimation({radius: 15, angle: 0}, function(context, options) {
    context.beginPath();

    var coordinates = circlePath(1000, 500, options.radius, options.angle);
    context.ellipse(coordinates.x, coordinates.y, 15, 14, 0, 0, 2 * Math.PI);



    context.strokeStyle = "#FFFFFF";
    context.stroke();

    context.fillStyle = "yellow";
    context.fill();

    context.closePath();

    options.angle++;

  });

  space.appendAnimation({radius: 175, angle: 0}, function(context, options) {
    context.beginPath();

    var coordinates = circlePath(1000, 500, options.radius, options.angle);
    context.ellipse(coordinates.x, coordinates.y, 3, 3, 0, 0, 2 * Math.PI);

    context.strokeStyle = "#FFFFFF";
    context.stroke();

    context.fillStyle = "rgb(122, 110, 221)";
    context.fill();

    context.closePath();

    options.angle = options.angle - 0.7;

  });

  space.appendAnimation({radius: 450, angle: 0}, function(context, options) {
    context.beginPath();

    var coordinates = circlePath(1000, 500, options.radius, options.angle);
    context.ellipse(coordinates.x, coordinates.y, 6, 5, 0, 0, 2 * Math.PI);

    context.strokeStyle = "#FFFFFF";
    context.stroke();

    context.fillStyle = "rgb(111, 221, 181)";
    context.fill();

    context.closePath();

    options.angle = options.angle + 2;

  });

  space.appendAnimation({radius: 300, angle: 0}, function(context, options) {
    context.beginPath();

    var coordinates = circlePath(1000, 500, options.radius, options.angle);
    context.ellipse(coordinates.x, coordinates.y, 4, 4, 0, 0, 2 * Math.PI);

    context.strokeStyle = "#FFFFFF";
    context.stroke();

    context.fillStyle = "rgb(249, 166, 140)";
    context.fill();

    context.closePath();

    options.angle++;

  });

  // space.appendAnimation({ x: 100, y: 200 }, function(context, options) {
  //   context.beginPath();
  //
  //   context.ellipse(options.x, options.y, 10, 10, 0, 0, 2 * Math.PI);
  //
  //   context.strokeStyle = "#FFFFFF";
  //   context.stroke();
  //
  //   context.fillStyle = "yellow";
  //   context.fill();
  //
  //   context.closePath();
  //
  //   options.x++;
  //   options.y++;
  // });

  space.initialize();

})();
