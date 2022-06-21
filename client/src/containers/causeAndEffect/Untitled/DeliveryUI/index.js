import React from "react";
import * as S from "./styles";
import Main from "./Main";
import Header from "./Header";

function Component() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function DeliveryUI() {
  return (
    <S.StyledDeliveryUI>
      <S.InnerContainer>
        <Component />
      </S.InnerContainer>
    </S.StyledDeliveryUI>
  );
}
export default DeliveryUI;
