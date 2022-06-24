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
  }

  animate(record) {
    let t = record.time;
    let text = record.text;
    let len = text.length;

    const fontSize = (1.5 * this.stageWidth) / len ** 0.3;
    this.ctx.globalAlpha = 0.05;
    this.ctx.fillStyle = `rgba(230, 230, 230, 1)`;

    let elNumbers = (t % 46) + 20;
    let intervalUnit = (this.stageWidth * this.stageHeight) / elNumbers;
    for (let i = 0; i < elNumbers; i++) {
      this.ctx.font = `${getRandom(50, this.stageWidth / 6)}px Times New Roman`;

      this.ctx.textBaseline = "middle";
      this.ctx.textAlign = "center";

      this.ctx.save();

      const x = Math.floor((intervalUnit * (i + 0.5)) % this.stageWidth);
      const y = Math.round((intervalUnit * (i + 0.5)) / this.stageWidth);
      this.ctx.translate(x, y);
      this.ctx.rotate((t % 360) + getRandom(-0.1, 0.1));
      this.ctx.beginPath();
      this.ctx.stroke();

      this.ctx.fillText(text, 0, 0);
      this.ctx.restore();
    }

    const typeData = this.ctx.getImageData(0, 0, this.stageWidth, this.stageHeight).data;

    for (let i = 0; i < this.stageWidth; i++) {
      for (let j = 0; j < this.stageHeight; j++) {
        if (Math.random() < 0.35) {
          const index = (i + j * this.stageWidth) * 4;
          const r = typeData[index];
          const g = typeData[index + 1];

          if (r !== 255 && r !== 0 && r === g) {
            this.ctx.fillStyle = record.color;
            this.ctx.globalAlpha = getRandom(0.05, getRandom(0.3, 0.6));
            this.ctx.beginPath();
            this.ctx.arc(i, j, getRandom(1, getRandom(1, getRandom(1, 10))), 0, 2 * Math.PI);
            this.ctx.fill();
          }
        }
      }
    }
    this.ctx.restore();
  }

  destroy() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    this.canvas.remove();
  }
}
