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
