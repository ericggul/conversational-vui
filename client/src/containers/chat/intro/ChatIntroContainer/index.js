import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import useInput from "@U/hooks/useInput";
import useFileInput from "@U/hooks/useFileInput";
import * as S from "./styles";

function ChatIntroContainer({ socket }) {
  const {
    value: userName,
    onChange: onUserChange,
    setValue: setUserName,
  } = useInput("", null);
  const {
    value: roomName,
    onChange: onRoomChange,
    setValue: setRoomName,
  } = useInput("", null);
  const {
    value: profileImage,
    onChange: onProfileImageChange,
    setValue: setProfileImage,
  } = useFileInput(nameConstraint);
  const history = useHistory();

  const handleClick = useCallback(() => {
    if (userName !== "" && roomName !== "") {
      socket.emit("joinRoom", { userName, roomName });
      history.push(`/chat/${roomName}/${userName}`);
    }
  }, [userName, roomName]);

  return (
    <S.StyledChatIntroContainer>
      <S.InputSector>
        <S.InputBox value={userName} onChange={onUserChange} />
        <S.InputBox value={roomName} onChange={onRoomChange} />
        <S.InputBoxImage onChange={onProfileImageChange} />
      </S.InputSector>
      <S.EnterSector>
        <S.EnterButton onClick={handleClick} />
      </S.EnterSector>
    </S.StyledChatIntroContainer>
  );
}
export default ChatIntroContainer;

ChatIntroContainer.propTypes = {};

function nameConstraint(value) {
  const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9_ ㆍ]*$/;
  return value.length <= 20 && regex.test(value);
}
