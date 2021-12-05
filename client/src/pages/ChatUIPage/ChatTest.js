import React from "react";
import io from "socket.io-client";

const socket = io.connect("/");

function ChatTest() {
  return <div>ChatTest</div>;
}
export default ChatTest;
