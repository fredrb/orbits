var Draw = {
  circle : function(context, size, x, y, fillColor) {
    context.beginPath();

    context.ellipse(x, y, size, size, 0, 0, 2 * Math.PI);

    context.strokeStyle = "#FFFFFF";
    context.stroke();

    context.fillStyle = fillColor;
    context.fill();

    context.closePath();
  }
}
