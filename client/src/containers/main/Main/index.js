import React, { useRef } from "react";
import PropTypes from "prop-types";
import MainBackground from "@F/three/MainBackground";
import * as S from "./styles";

function Main() {
  return (
    <>
      <MainBackground />
      <S.StyledMain>
        <S.Paragraph>
          <S.Title>Authorized Personnel Only</S.Title>
          <S.Descrp>
            Our Website is accessible only upon invitation. <br />
            Uninvited public guests must provide at least two recommendations
            from our members in order to access the site. <br />
            For more inquiries, kindly mail{" "}
            <a
              href="https://www.seoulclub.org/theme/basic/html/5010.index.php"
              style={{ color: "black" }}
            >
              ericggul@gmail.com
            </a>
            .
          </S.Descrp>
        </S.Paragraph>
      </S.StyledMain>
    </>
  );
}
export default Main;

Main.propTypes = {};
