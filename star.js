var Star = function(properties) {
  this.size = properties.size;
  this.style = properties.style;
  this.angle = properties.initialAngle || 0;
  this.bound = null;
  this.centered = properties.center != null || undefined;
  this.canvas = properties.canvas || null;
  this.radius = properties.radius;
  this.glow   = properties.glow || false;
};

Star.prototype.position = function() {
  return (this.centered)
    ? this.orbitalPathByAngle(this.canvas.width/2, this.canvas.height/2, 2, this.angle)
    : this.orbitalPathByAngle(this.bound.position().x, this.bound.position().y, this.radius, this.angle);
}

Star.prototype.orbitalPathByAngle = function(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

Star.prototype.bind = function(star) {
  star.bound = this;
  return this;
}
