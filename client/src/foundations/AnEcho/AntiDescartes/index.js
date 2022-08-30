import React, { useEffect } from "react";

import DescartesImg from "@ST/image/descartes.png";

//to do : Descartes Img into dot, X sign on it

function AntiDescartes() {
  useEffect(() => {
    const render = new App(DescartesImg);
  }, []);

  return (
    <div
      className="Wrapper"
      style={{
        overflow: "hidden",
        position: "absolute",
        width: "300px",
        height: "300px",
        zIndex: "3",
        background: "transparent",
      }}
    />
  );
}

export default AntiDescartes;

class App {
  constructor(image) {
    this.canvas = document.createElement("canvas");
    this.wrapper = document.getElementsByClassName("Wrapper")[0];
    this.wrapper.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.tmpCanvas = document.createElement("canvas");
    this.tmpCanvas.setAttribute("style", "opacity:0");
    this.wrapper.appendChild(this.tmpCanvas);
    this.tmpCtx = this.tmpCanvas.getContext("2d");
    this.pixelRatio = 1;
    this.dots = [];
    this.isLoaded = false;
    this.imgPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    this.image = new Image();
    this.image.src = image;

    this.image.onload = () => {
      this.isLoaded = true;
      this.drawImage();
    };
  }

  drawImage() {
    this.stageWidth = this.wrapper.clientWidth;
    this.stageHeight = this.wrapper.clientHeight;
    this.radius = 4;

    const stageRatio = this.stageWidth / this.stageHeight;
    const imgRatio = this.image.width / this.image.height;
    this.imgPos.width = this.stageWidth;
    this.imgPos.height = this.stageHeight;

    if (imgRatio < stageRatio) {
      this.imgPos.width = Math.round(this.image.width * (this.stageHeight / this.image.height));
      this.imgPos.x = Math.round((this.stageWidth - this.imgPos.width) / 2);
      this.imgPos.y = 0;
    } else {
      this.imgPos.height = Math.round(this.image.height * (this.stageWidth / this.image.width));
      this.imgPos.y = Math.round((this.stageHeight - this.imgPos.height) / 2);
      this.imgPos.x = 0;
    }
    this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.imgPos.x, this.imgPos.y, this.imgPos.width, this.imgPos.height);
    this.tmpCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.imgPos.x, this.imgPos.y, this.imgPos.width, this.imgPos.height);
    console.log(this.tmpCtx);
    this.imageData = this.tmpCtx?.getImageData(0, 0, this.stageWidth, this.stageHeight);
  }

  drawDots() {
    this.dots = [];

    this.columns = Math.ceil(this.imgPos.width / this.pixelSize);
    this.rows = Math.ceil(this.imgPos.height / this.pixelSize);

    for (let i = 0; i < this.rows; i += 1) {
      const y = (i + 0.5) * this.pixelSize;
      const pixelY = Math.max(Math.min(y, this.imgPos.height), 0) + this.imgPos.y;
      for (let j = 0; j < this.columns; j += 1) {
        const x = (j + 0.5) * this.pixelSize;
        const pixelX = Math.max(Math.min(x, this.imgPos.width), 0) + this.imgPos.x;

        const pixelIndex = (pixelX + pixelY * this.imgPos.width) * 4;
        const alpha = this.imageData.data[pixelIndex + 3];

        const dot = new Dot(x + this.imgPos.x, y + this.imgPos.y, this.radius, alpha);
        this.dots.push(dot);
      }
    }

    this.dots.forEach((dot) => dot.draw(this.ctx));
  }
}

class Dot {
  constructor(x, y, radius, alpha) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.alpha = alpha;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
}
