export const customXSymbol = {
  draw: function(context: any, size: number) {
    context.moveTo(-size, size);
    context.lineTo(size, -size);
    context.moveTo(size, size);
    context.lineTo(-size, -size);
    context.closePath();
  }
};
