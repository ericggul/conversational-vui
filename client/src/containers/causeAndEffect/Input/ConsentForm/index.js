import React, { useEffect, useState } from "react";
import { TEXTS, DEFAULT_REPLACE_ARRAY } from "./data";

import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomArray = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomColor = () => `hsl(${getRandom(0, 350)}, 100%, 30%)`;

function SingleAgreementBlock({ text, checked }) {
  const PREDEFIEND_TEXT = "henry".toLocaleLowerCase().split("");

  const showOnlyIncludedString = (string, replace = DEFAULT_REPLACE_ARRAY) =>
    string
      .trim()
      .split("")
      .map((str, i) => (str === " " ? "\u00A0" : PREDEFIEND_TEXT.includes(str.toLowerCase()) ? str : getRandomArray(replace)))
      .join("");

  const [consentContents, setConsentContents] = useState(showOnlyIncludedString(text));
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    if (checkState) {
      checked();
    }
  }, [checkState]);

  return (
    <S.Block color={getRandomColor()}>
      <S.BlockWrapper>
        <S.Header>{showOnlyIncludedString("Privacy Agreement")}</S.Header>
        <S.Contents value={consentContents} onChange={(e) => setConsentContents(e.target.value)} />
        <S.AgreePart>
          <S.AgreeSector>
            <S.Input checked={checkState} onClick={() => setCheckState((st) => !st)} />
          </S.AgreeSector>
        </S.AgreePart>
      </S.BlockWrapper>
    </S.Block>
  );
}

function ScreenTesting({ closeModal }) {
  const [showTexts, setShowTexts] = useState(1);

  return (
    <S.Background onClick={closeModal}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.InnerContainer>{TEXTS.map((txt, i) => showTexts > i && <SingleAgreementBlock key={i} text={txt} checked={() => setShowTexts(i + 2)} />)}</S.InnerContainer>
        <S.NextButton showTexts={showTexts} />
      </S.Container>
    </S.Background>
  );
}
export default ScreenTesting;

ScreenTesting.propTypes = {};
