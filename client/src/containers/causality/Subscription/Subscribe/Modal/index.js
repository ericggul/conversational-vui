import React, { useState, useEffect } from "react";
import * as S from "./styles";

function Modal({ modalData, modalOpened, handleModalClose }) {
  const [email, setEmail] = useState("");
  const [ticker, setTicker] = useState(false);

  const handleClick = () => {
    //check if email valid
    if (email.includes("@") && email.includes(".") && ticker) {
    }
  };

  useEffect(() => {
    setEmail("");
    setTicker(false);
  }, [modalData, modalOpened]);

  return (
    <S.StyledModal modalOpened={modalOpened && modalData} onClick={handleModalClose}>
      <S.Contents onClick={(e) => e.stopPropagation()}>
        <S.Text>{modalData.text}</S.Text>
        <S.Image src={modalData.imageUrl} />
        <S.EmailContainer>
          <p>Send this artwork to my email</p>

          <S.Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abcd@xyz.com" />
          <S.TickingContainer visible={email.includes("@") && email.includes(".")} onClick={() => setTicker((t) => !t)}>
            <p>Subscribe to the artist's mailing list. (Optional)</p>

            <S.Ticker checked={ticker} />
          </S.TickingContainer>
          <S.Send onClick={handleClick} visible={email.includes("@") && email.includes(".")}>
            Send
          </S.Send>
        </S.EmailContainer>
        <S.Cancel onClick={handleModalClose}>X</S.Cancel>
      </S.Contents>
    </S.StyledModal>
  );
}
export default Modal;
