const express = require("express");
const app = express();
const socket = require("socket.io");
const color = require("colors");
const cors = require("cors");

const { get_Current_User, user_Disconnect, join_User } = require("./dummyuser");

app.use(express());

const port = 8000;

app.use(cors());

var server = app.listen(
  port,
  console.log(`Server is running on the prt no: ${port}`)
);

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ userName, roomName }) => {
    const p_user = join_User(socket.id, userName, roomName);

    console.log(socket.id, "=id");

    socket.join(p_user.room);

    socket.emit("message", {
      type: "text",
      userId: p_user.id,
      userName: p_user.userName,
      text: `Welcome ${p_user.userName}`,
    });

    socket.broadcast.to(p_user.room).emit("message", {
      type: "text",
      userId: p_user.id,
      userName: p_user.userName,
      text: `${p_user.userName} has joined the chat`,
    });
  });

  socket.on("chat", (text) => {
    const p_user = get_Current_User(socket.id);
    if (p_user) {
      io.to(p_user.room).emit("message", {
        type: "text",
        userId: p_user.id,
        userName: p_user.userName,
        text: text,
      });
    }
  });

  socket.on("radio", (blob) => {
    const p_user = get_Current_User(socket.id);
    if (p_user) {
      io.to(p_user.room).emit("voice", {
        type: "blob",
        userId: p_user.id,
        userName: p_user.userName,
        blob: blob,
      });
    }
  });

  socket.on("disconnect", () => {
    const p_user = user_Disconnect(socket.id);
    if (p_user) {
      io.to(p_user.room).emit("message", {
        type: "text",
        userId: p_user.id,
        userName: p_user.userName,
        text: `${p_user.userName} had left the room`,
      });
    }
  });
});
