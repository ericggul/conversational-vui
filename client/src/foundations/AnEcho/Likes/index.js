import React, { useState, useEffect } from "react";

const PATH = "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3";
const getRandom = (a, b) => Math.random() * (b - a) + a;

function Likes() {
  const [draw, setDraw] = useState(null);
  useEffect(() => {
    setDraw(new Canvas());
  }, []);

  return <div id="likes-canvas" style={{ position: "absolute", top: "900px", left: "0px", width: "700px", height: "500px" }} />;
}

class Canvas {
  constructor() {
    this.wrapper = document.getElementById("likes-canvas");
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

    this.iconNumber = 70;
    this.iconSets = [];

    this.init();
  }

  init() {
    for (let i = 0; i < this.iconNumber; i++) {
      this.iconSets.push(
        new Icon(
          {
            x: getRandom(50, this.stageWidth - 50),
            y: getRandom(50, this.stageHeight - 50),
          },
          Math.floor(i / 200) * 4000 + getRandom(0, getRandom(0, 200)),
          {
            x: (((i % 14) + 0.5) / 14) * this.stageWidth,
            y: (((i % 5) + 0.5) / 5) * this.stageHeight,
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
    if (delta > 10) {
      this.draw();
    }
    this.then = this.now;
  }

  draw() {
    this.iconSets.map((icon) => icon.draw(this.ctx, this.elapsedTime));
  }
}

class Icon {
  constructor(pos, timeStart, initialPos) {
    this.pos = initialPos;
    this.posSpeed = getRandom(0.05, 0.1);
    this.angle = 0;
    this.targetPos = pos;
    this.targetAngle = Math.PI * getRandom(5, getRandom(10, 20));
    this.scale = getRandom(1, 5) * 0.3;
    this.targetScale = getRandom(1, getRandom(1, getRandom(5, 10))) * 0.3;
    this.targetColor = {
      a: getRandom(0.05, 0.1),
    };
    this.color = {
      a: 0.03,
    };

    this.timeStart = timeStart;
  }

  draw(ctx, elapsedTime) {
    if (elapsedTime > this.timeStart) {
      this.pos.x += (this.targetPos.x - this.pos.x) * this.posSpeed;
      this.pos.y += (this.targetPos.y - this.pos.y) * this.posSpeed;
      this.angle += (this.targetAngle - this.angle) * 0.05;
      this.scale += (this.targetScale - this.scale) * 0.1;

      this.color.a += (this.targetColor.a - this.color.a) * 0.07;

      ctx.save();
      ctx.translate(this.pos.x, this.pos.y);
      ctx.rotate(this.angle);
      ctx.scale(this.scale, this.scale);

      ctx.fillStyle = ctx.strokeStyle = `rgba(255, 255, 255, ${this.color.a})`;

      let p = new Path2D(PATH);

      ctx.fill(p);

      ctx.restore();
    }
  }
}

export default Likes;
