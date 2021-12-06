import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import ChatInterfaceWithSocket from "@/containers/chat/default/ChatInterfaceWithSocket";
import io from "socket.io-client";

function ChatDefault({ roomName, userName, socket }) {
  return (
    <S.StyledChatDefault>
      <ChatInterfaceWithSocket
        roomName={roomName}
        userName={userName}
        socket={socket}
      />
    </S.StyledChatDefault>
  );
}
export default ChatDefault;

ChatDefault.propTypes = {};
