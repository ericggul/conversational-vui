import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import ChatInterface from "@C/chat/default/ChatInterface";
import io from "socket.io-client";

function ChatDefault({ roomName, userName, socket }) {
  return (
    <S.StyledChatDefault>
      <ChatInterface roomName={roomName} userName={userName} socket={socket} />
    </S.StyledChatDefault>
  );
}
export default ChatDefault;

ChatDefault.propTypes = {};
