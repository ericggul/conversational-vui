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
    let text = record.msg;
    let len = text.length;

    const fontSize = (1.5 * this.stageWidth) / len ** 0.3;
    this.ctx.fillStyle = `rgba(0, 0, 0, .01)`;
    this.ctx.font = `${fontSize}px Times New Roman`;

    this.ctx.textBaseline = "middle";
    this.ctx.textAlign = "center";

    this.ctx.beginPath();
    this.ctx.stroke();

    this.ctx.fillText(text[len - 1], this.stageWidth / 2, this.stageHeight / 2);
    this.ctx.restore();

    const typeData = this.ctx.getImageData(0, 0, this.stageWidth, this.stageHeight).data;

    const color = { r: getRandom(0, 255), g: getRandom(0, 255), b: getRandom(0, 255) };
    for (let i = 0; i < this.stageWidth; i++) {
      for (let j = 0; j < this.stageHeight; j++) {
        if (Math.random() < 0.1) {
          const index = (i + j * this.stageWidth) * 4;
          const r = typeData[index];
          const g = typeData[index + 1];

          if (r !== 255 && r === g) {
            console.log(r, g);
            this.ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${getRandom(0, 0.1) * len})`;
            this.ctx.beginPath();
            this.ctx.arc(i, j, getRandom(1, getRandom(1, getRandom(1, 10))), 0, 2 * Math.PI);
            this.ctx.fill();
          }
        }
      }
    }
  }

  destroy() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    this.canvas.remove();
  }
}
