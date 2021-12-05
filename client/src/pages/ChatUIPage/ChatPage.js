import React from "react";
import { useHistory, useParams } from "react-router-dom";
import ChatDefault from "@/containers/chat/default/ChatDefault";

function ChatPage({ socket }) {
  const history = useHistory();
  const { roomName, userName } = useParams();

  return (
    <div>
      <ChatDefault roomName={roomName} userName={userName} socket={socket} />
    </div>
  );
}
export default ChatPage;
