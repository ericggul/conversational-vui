const getRandom = (a, b) => Math.random() * (b - a) + a;
const getIntRandom = (a, b) => Math.floor(getRandom(a, b));

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
    this.waveInit();
  }

  waveInit() {
    this.lambda = 70;
    this.waveFunction = (max, lambda) => ((Math.asin(getRandom(-1, 1)) + Math.PI / 2) * lambda) / Math.PI + getIntRandom(0, Math.ceil(max / lambda)) * lambda;
    this.drawInit();
  }

  drawInit() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    this.ctx.fillStyle = "black";
  }

  animate(record) {
    console.log(record);

    for (let i = 0; i < 2000; i++) {
      const center = { x: this.stageWidth / 2, y: this.stageHeight / 2 };
      const distance = this.waveFunction(this.stageWidth, 100);
      const angle = getRandom(0, Math.PI * 2);

      this.ctx.fillStyle = `rgba(0, 0, 0, ${getRandom(0.5, 1)})`;
      this.ctx.beginPath();
      this.ctx.arc(distance, getRandom(0.4, 0.6) * this.stageHeight, getRandom(0, 2), 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  destroy() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    this.canvas.remove();
  }
}
