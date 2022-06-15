import React, { useState } from "react";
import ConsentForm from "@C/compositions/screen/underground/ConsentForm";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomColor = () => `hsl(${getRandom(50, 300)}, 100%, 50%)`;

function ScreenTesting() {
  const [text, setText] = useState("");
  const [highState, setHighState] = useState(false);

  const [color, setColor] = useState(getRandomColor());

  const handleChange = (e) => {
    setColor(getRandomColor());
    setText(e.target.value);
    setHighState(true);
    setTimeout(() => {
      setHighState(false);
    }, 300);
  };

  const [consentModalOpened, setConsentModalOpened] = useState(false);
  const handleButtonClick = () => setConsentModalOpened(true);

  return (
    <S.Container highState={highState} color={color}>
      <S.Inner>
        <S.Circle highState={highState} color={color} rotate={text.length - 6}>
          <S.Input value={text} onChange={handleChange} />
        </S.Circle>
      </S.Inner>
      {text.length > 1 && <S.ButtonTop onClick={handleButtonClick} />}
      {text.length > 2 && <S.ButtonBottom onClick={handleButtonClick} />}
      <S.ButtonLeft transit={text.length - 4} onClick={handleButtonClick}>
        X
      </S.ButtonLeft>
      <S.ButtonRight transit={text.length - 5} onClick={handleButtonClick}>
        X
      </S.ButtonRight>
      {consentModalOpened && <ConsentForm closeModal={() => setConsentModalOpened(false)} />}
    </S.Container>
  );
}
export default ScreenTesting;

ScreenTesting.propTypes = {};
