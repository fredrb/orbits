function Space(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.context = this.canvas.getContext('2d');

  this.drawQueue = [];
};

Space.prototype.initialize = function(options) {
  this.options = options || {};
  this._drawScene_();

  window.addEventListener('resize', function() {
    this._drawScene_();
  }.bind(this), false);

  this.animationLoop();
};

Space.prototype.animationLoop = function() {
  setTimeout(function() {
    window.requestAnimationFrame(this.animationLoop.bind(this));
    this._loop_();
  }.bind(this), 30);
}

Space.prototype.createStar = function(properties) {
  properties.canvas = this.canvas;
  var star = new Star(properties);
  this.drawQueue.push({
    param: star,
    fn : function(conext, star) {
      this._drawStar_(star.size, star.position().x, star.position().y, star.style, star.glow);
      star.angle += properties.speed || 5;
    }.bind(this)
  });

  return star;
}

Space.prototype._drawObjects_ = function() {
  this.drawQueue.forEach(function(d) {
    d.fn(this.context, d.param);
  }.bind(this));
};

Space.prototype._drawScene_  = function() {
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this._initStarMap_(this.options.ratio || 5);
};

Space.prototype._clear_ = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Space.prototype._loop_ = function() {
  this._clear_();
  this._drawBackground_();
  this._drawObjects_();
};

Space.prototype._initStarMap_ = function(ratio) {
  this.starMap = [];
  for(var i = 0; i < (100 * ratio); i++)
    this.starMap.push({
      x : Math.random() * this.canvas.width,
      y : Math.random() * this.canvas.height,
      size : Math.random() * 1.5
    });
};

Space.prototype._drawStar_ = function(size, x, y, color, glow) {
  if (glow) {
    this.context.save();
    this.context.shadowBlur = glow
    this.context.shadowColor = '#f7ffc3';
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;
  }

  this.context.beginPath();
  this.context.ellipse(x, y, size, size, 0, 0, Math.PI * 2);
  this.context.fillStyle = color || 'white';
  this.context.fill();
  this.context.closePath();

  if (glow) {
    this.context.restore();
  }
}

Space.prototype._drawBackground_ = function() {
  this.context.rect(0,0, this.canvas.width, this.canvas.height);
  this.context.fillStyle = this.options.background || 'black';
  this.context.fill();

  this.context.save();
  this.context.shadowBlur = 1
  this.context.shadowColor = '#f7ffc3';
  this.context.shadowOffsetX = 0;
  this.context.shadowOffsetY = 0;

  this.starMap.forEach(function(star) {
    this._drawStar_(star.size, star.x, star.y);
  }.bind(this));

  this.context.restore();
};
