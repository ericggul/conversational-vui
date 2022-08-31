import React from "react";
import * as S from "./styles";

function Instructions({ handleToIntro }) {
  return (
    <S.StyledInstructions>
      <S.Instructions>
        <h1>Instructions</h1>
        <p>1. Use Desktop or Laptop to view this artwork.</p>
        <p>2. Use Chrome Browser to view this artwork.</p>
        <p>3. Please Allow the Access for the Camera</p>
        <p>4. Go to the Developer Console: Either Right Click on your mouse and selected 'Inspect', or use the shortcut (Command+Option+J)</p>
        <p>5. Adjust the Browser Dimension Size ideally to 2000 X 1400 px</p>
        <S.Button onClick={handleToIntro}>NEXT</S.Button>
      </S.Instructions>
    </S.StyledInstructions>
  );
}
export default Instructions;
