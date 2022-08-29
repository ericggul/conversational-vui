import React, { useState, useEffect } from "react";

const PATH = "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3";
const getRandom = (a, b) => Math.random() * (b - a) + a;

function Likes() {
  const [draw, setDraw] = useState < any > null;
  useEffect(() => {
    setDraw(new Canvas());
  }, []);
  useEffect(() => {
    if (draw) {
      document.addEventListener("click", () => draw.capture());
      return () => document.removeEventListener("click", () => draw.capture());
    }
  }, [draw]);

  return <div id="CanvasWrapper" style={{ width: "100vw", height: "100vh", background: "white" }} />;
}

class Canvas {
  constructor() {
    this.wrapper = document.getElementById("CanvasWrapper");
    this.canvas = document.createElement("canvas");
    this.wrapper.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.resize();

    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;

    this.scale = 1;
    this.canvas.width = this.stageWidth * this.scale;
    this.canvas.height = this.stageHeight * this.scale;

    this.ctx.scale(this.scale, this.scale);

    this.iconNumber = 5000;
    this.iconSets = [];

    this.mousePos = { x: this.stageWidth / 2, y: this.stageHeight / 2 };

    this.init();

    document.addEventListener("mousemove", (e) => {
      this.mousePos = { x: Math.round(e.clientX), y: Math.round(e.clientY) };
    });
    document.addEventListener("touchmove", (e) => {
      this.mousePos = {
        x: Math.round(e.changedTouches[0].clientX),
        y: Math.round(e.changedTouches[0].clientY),
      };
    });
  }

  init() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    for (let i = 0; i < this.iconNumber; i++) {
      this.iconSets.push(
        new Icon(
          {
            x: getRandom(-100, this.stageWidth + 50),
            y: getRandom(-100, this.stageHeight + 50),
          },
          Math.floor(i / 200) * 4000 + getRandom(0, getRandom(0, 200)),
          {
            x: this.stageWidth * 0.5,
            y: this.stageHeight * 0.5,
          }
        )
      );
    }

    this.then = Date.now();
    this.initial = Date.now();

    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.now = Date.now();
    this.elapsedTime = this.now - this.initial;
    const delta = this.now - this.then;
    if (delta > 3) {
      this.draw();
    }
    this.then = this.now;
  }

  draw() {
    console.log(this.mousePos);
    this.iconSets.map((icon) => icon.draw(this.ctx, this.elapsedTime, this.mousePos));
  }

  capture() {
    console.log("handling..");
    let dataURL = this.canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "image.png";
    link.href = dataURL;

    link.click();
    console.log("downloaded..");
    link.remove();
  }
}

class Icon {
  constructor(pos, timeStart, initialPos) {
    this.pos = initialPos;
    this.posSpeed = getRandom(0.013, 0.015);
    this.angle = 0;
    this.targetPos = pos;
    this.targetAngle = Math.PI * getRandom(5, getRandom(10, 20));
    this.scale = getRandom(1, 5);
    this.targetScale = getRandom(1, getRandom(1, getRandom(5, 10)));
    this.targetColor = {
      r: getRandom(150, 200),
      g: getRandom(0, 200),
      b: getRandom(0, 200),
      a: getRandom(0.05, 0.1),
    };
    this.color = {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    };

    this.timeStart = timeStart;
  }

  draw(ctx, elapsedTime) {
    if (elapsedTime < this.timeStart && elapsedTime > this.timeStart - 100) {
      // this.pos = mousePos;
    } else if (elapsedTime > this.timeStart && elapsedTime < this.timeStart + 70 / this.posSpeed) {
      this.pos.x += (this.targetPos.x - this.pos.x) * this.posSpeed;
      this.pos.y += (this.targetPos.y - this.pos.y) * this.posSpeed;
      this.angle += (this.targetAngle - this.angle) * 0.05;
      this.scale += (this.targetScale - this.scale) * 0.1;

      this.color.r += (this.targetColor.r - this.color.r) * 0.1 + getRandom(-10, 10);
      this.color.g += (this.targetColor.g - this.color.g) * 0.07;
      this.color.b += (this.targetColor.b - this.color.b) * 0.07;
      this.color.a += (this.targetColor.a - this.color.a) * 0.07;

      ctx.save();
      ctx.translate(this.pos.x, this.pos.y);
      ctx.rotate(this.angle);
      ctx.scale(this.scale, this.scale);

      ctx.fillStyle = ctx.strokeStyle = `rgba(${this.color.r},${this.color.g},${this.color.b}, ${this.color.a})`;

      let p = new Path2D(PATH);

      ctx.fill(p);

      ctx.restore();
    }
  }
}

export default Likes;
