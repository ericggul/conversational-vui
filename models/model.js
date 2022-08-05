const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

class Model {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);

    this.port = process.env.PORT || 8000;
    this.paths = {
      tts: "/tts",
      openai: "/openai",
    };
    this.middlewares();
    this.routes();
    this.socketConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(__dirname, "../client/build")));
  }

  routes() {
    this.app.use(this.paths.tts, require("../routes/tts"));
    this.app.use(this.paths.openai, require("../routes/openai"));
    this.app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }

  socketConnection() {
    this.io.on("connection", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });

      socket.on("simple input 1", () => {
        this.io.emit("input 1");
      });
      socket.on("simple input 2", (data) => {
        this.io.emit("input 2", data);
      });
      socket.on("screen shot", () => {
        this.io.emit("screen shot signal");
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Model;
