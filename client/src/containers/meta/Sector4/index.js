import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaReact, FaSass, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiThreedotjs,
  SiStyledcomponents,
  SiAmazonaws,
  SiRedux,
  SiFirebase,
  SiPytorch,
  SiTensorflow,
  SiSwift,
  SiProcessingfoundation,
} from "react-icons/si";
import * as S from "./styles";

function Sector4() {
  return (
    <S.StyledSector4>
      <S.Displayer>
        <S.FrameworkContainer>
          <S.Header>Experienced Tools</S.Header>
          <S.FrameworkRow>
            <S.FrameworkIndicator>Languages</S.FrameworkIndicator>
            <S.FrameworkCluster>
              <S.Icon>
                <SiJavascript />
              </S.Icon>
              <S.Icon>
                <SiTypescript />
              </S.Icon>
              <S.Icon>
                <SiPython />
              </S.Icon>
            </S.FrameworkCluster>
          </S.FrameworkRow>
          <S.FrameworkRow>
            <S.FrameworkIndicator>JS Libraries</S.FrameworkIndicator>
            <S.FrameworkCluster>
              <S.Icon>
                <FaReact />
              </S.Icon>
              <S.Icon>
                <SiThreedotjs />
              </S.Icon>
            </S.FrameworkCluster>
          </S.FrameworkRow>
          <S.FrameworkRow>
            <S.FrameworkIndicator>CSS Stylings</S.FrameworkIndicator>
            <S.FrameworkCluster>
              <S.Icon>
                <FaSass />
              </S.Icon>
              <S.Icon>
                <SiStyledcomponents />
              </S.Icon>
            </S.FrameworkCluster>
          </S.FrameworkRow>
          <S.FrameworkRow>
            <S.FrameworkIndicator>Languages</S.FrameworkIndicator>
            <S.FrameworkCluster>
              <S.Icon>
                <SiRedux />
              </S.Icon>
              <S.Icon>
                <SiAmazonaws />
              </S.Icon>
              <S.Icon>
                <SiFirebase />
              </S.Icon>
            </S.FrameworkCluster>
          </S.FrameworkRow>
          <S.FrameworkRow>
            <S.FrameworkIndicator>Non-JS Frameworks</S.FrameworkIndicator>
            <S.FrameworkCluster>
              <S.Icon>
                <SiPytorch />
              </S.Icon>
              <S.Icon>
                <SiSwift />
              </S.Icon>
              <S.Icon>
                <SiProcessingfoundation />
              </S.Icon>
            </S.FrameworkCluster>
          </S.FrameworkRow>
        </S.FrameworkContainer>
        <S.Header>Contact Me</S.Header>
        <S.IconContainer>
          <S.AIcon>
            <a
              href="https://github.com/ericggul"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black", textDecoration: "none" }}
            >
              <FaGithub />
            </a>
          </S.AIcon>
          <S.AIcon>
            <a
              href="https://www.linkedin.com/in/jeanyoonchoi/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black", textDecoration: "none" }}
            >
              <FaLinkedin />
            </a>
          </S.AIcon>
          <S.AIcon>
            <a
              href="http://portfolio-jyc.org"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black", textDecoration: "none" }}
            >
              <CgWebsite />
            </a>
          </S.AIcon>
        </S.IconContainer>
      </S.Displayer>
    </S.StyledSector4>
  );
}
export default Sector4;

Sector4.propTypes = {};
