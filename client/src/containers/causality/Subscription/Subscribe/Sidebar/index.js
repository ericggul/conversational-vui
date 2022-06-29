import React from "react";
import * as S from "./styles";

function Sidebar({ text }) {
  return (
    <S.StyledSidebar>
      <S.Text>{text}</S.Text>
    </S.StyledSidebar>
  );
}
export default Sidebar;
