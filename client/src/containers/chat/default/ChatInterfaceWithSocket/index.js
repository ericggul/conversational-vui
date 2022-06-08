import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { to_Decrypt, to_Encrypt } from "@U/functions/aes";
import { process } from "@/redux/action";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import VoiceInput from "@/foundations/chat/VoiceInput";
import VoicePlayer from "@/foundations/chat/voice-player/VoicePlayer";
import { Howl } from "howler";

import useInput from "@U/hooks/useInput";

import * as S from "./styles";

function ChatInterfaceWithSocket({ userName, roomName, socket }) {
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const dispatchProcess = (encrypt, msg, cipher) => {
    dispatch(process(encrypt, msg, cipher));
  };

  useEffect(() => {
    console.log("socket change");
    socket.on("message", (data) => {
      console.log("26", data);
      const ans = to_Decrypt(data.text, data.userName);
      dispatchProcess(false, ans, data.text);

      let temp = messages;
      temp.push({
        type: data.type,
        userId: data.userId,
        userName: data.userName,
        text: ans,
      });
      setMessages([...temp]);
    });

    socket.on("voice", (data) => {
      console.log("38", data);
      const ans = to_Decrypt(data.blob, data.userName);
      dispatchProcess(false, ans, data.blob);

      let temp = messages;
      temp.push({
        type: data.type,
        userId: data.userId,
        userName: data.userName,
        blob: data.blob,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  // const messagesEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(scrollToBottom, [messages]);

  const { value: chatInput, onChange: onChatInputChange, setValue: setChatInput } = useInput("constinantonple", null);

  const sendData = (input) => {
    if (input !== "") {
      const ans = to_Encrypt(input);
      socket.emit("chat", ans);
      setChatInput("");
    }
  };

  const handleNewAudio = (audio) => {
    if (audio) {
      socket.emit("radio", audio);
    }
  };

  const [currentVoice, setCurrentVoice] = useState(-1);
  const [commandPauseVoiceIdx, setCommandPauseVoiceIdx] = useState(-1);
  const onVoiceClick = useCallback(
    (voiceIdx) => {
      if (voiceIdx !== currentVoice) {
        setCommandPauseVoiceIdx(currentVoice);
        setCurrentVoice(voiceIdx);
      }
    },
    [currentVoice]
  );

  return (
    <S.Container>
      <S.ChatDisplay>
        {messages.map((msg, i) => {
          return msg.type === "text" ? (
            <S.ChatElement key={i}>
              <S.ChatProfile>{msg.userName}</S.ChatProfile>
              <S.ChatContents>{msg.text}</S.ChatContents>
            </S.ChatElement>
          ) : (
            <VoicePlayer key={i} voiceIdx={i} msg={msg} commandPauseVoice={commandPauseVoiceIdx === i ? true : false} onVoiceClick={onVoiceClick} />
          );
        })}
      </S.ChatDisplay>
      <S.ChatSend>
        <S.ChatInput value={chatInput} onChange={onChatInputChange} />
        <S.SendButton onClick={() => sendData(chatInput)} />
      </S.ChatSend>

      <VoiceInput handleNewAudio={handleNewAudio} />
    </S.Container>
  );
}
export default ChatInterfaceWithSocket;

ChatInterfaceWithSocket.propTypes = {};
