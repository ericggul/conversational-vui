export default class Canvas {
  constructor() {
    this.init();
  }

  init() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;
    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.canvas.style.position = "absolute";
    this.canvas.style.top = "0";

    if (document.getElementById("canvas-render")) {
      document.getElementById("canvas-render").appendChild(this.canvas);
    }
    this.draw();
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
  }

  animate() {}

  destroy() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    this.canvas.remove();
  }
}
