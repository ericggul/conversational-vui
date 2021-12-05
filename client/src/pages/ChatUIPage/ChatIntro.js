import React from "react";
import ChatIntroContainer from "@/containers/chat/intro/ChatIntroContainer";

function ChatIntro({ socket }) {
  return <ChatIntroContainer socket={socket} />;
}
export default ChatIntro;
