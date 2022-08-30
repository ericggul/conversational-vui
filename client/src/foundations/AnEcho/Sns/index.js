import React from "react";
import * as S from "./styles";

import { SiFacebook, SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";

function Sns() {
  return (
    <S.StyledSns>
      <S.Text>Share what's happening in the world</S.Text>
      <S.SnsRow>
        <S.Icon>
          <SiFacebook />
        </S.Icon>
        <S.Icon>
          <SiTwitter />
        </S.Icon>
        <S.Icon>
          <SiInstagram />
        </S.Icon>
        <S.Icon>
          <SiLinkedin />
        </S.Icon>
      </S.SnsRow>
      <S.SnsRow>
        <S.Icon>
          <SiTwitter />
        </S.Icon>
        <S.Icon>
          <SiInstagram />
        </S.Icon>
        <S.Icon>
          <SiLinkedin />
        </S.Icon>
        <S.Icon>
          <SiFacebook />
        </S.Icon>
      </S.SnsRow>
      <S.SnsRow>
        <S.Icon>
          <SiInstagram />
        </S.Icon>
        <S.Icon>
          <SiLinkedin />
        </S.Icon>

        <S.Icon>
          <SiFacebook />
        </S.Icon>
        <S.Icon>
          <SiTwitter />
        </S.Icon>
      </S.SnsRow>
      <S.SnsRow>
        <S.Icon>
          <SiLinkedin />
        </S.Icon>
        <S.Icon>
          <SiFacebook />
        </S.Icon>
        <S.Icon>
          <SiTwitter />
        </S.Icon>
        <S.Icon>
          <SiInstagram />
        </S.Icon>
      </S.SnsRow>
      <S.Text>Get the latest news: Don't get behind!</S.Text>
    </S.StyledSns>
  );
}
export default Sns;
