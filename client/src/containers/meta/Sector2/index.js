import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import * as S from "./styles";

function Sector2() {
  const ArrowButton = ({ opened }) => {
    return (
      <S.ArrowButton>
        <S.ArrowBar opened={opened} angle={45} />
        <S.ArrowBar opened={opened} angle={-45} />
      </S.ArrowButton>
    );
  };

  const Displayer = ({ data, i }) => {
    const [opened, setOpened] = useState(false);

    return (
      <Fade bottom delay={i * 150}>
        <S.Displayer>
          <ArrowButton opened={opened} />
          <S.Question onClick={() => setOpened((open) => !open)}>
            {data.question}
          </S.Question>
          <S.Answer opened={opened}>
            {data.answer.split("<br />").map((datum, i) => (
              <div key={i}>{datum}</div>
            ))}
          </S.Answer>
        </S.Displayer>
      </Fade>
    );
  };
  return (
    <S.StyledSector2>
      <S.Header>Questions A</S.Header>
      <Displayer
        i={1}
        data={{
          question:
            "Please rate your skills working with JavaScript on a scale of (could be better)1-5 (excellent)",
          answer: "4(Good)",
        }}
      />
      <Displayer
        i={2}
        data={{
          question:
            "Your expected month and year of graduation and University name, Degree type (BSc/MSc/PhD/Other etc.)",
          answer: `BSc Industrial Engineering, Seoul National University, Seoul, Republic of Korea(-Feb 2022) <br />
          MA Information Experience Design, Royal College of Art, London, UK (Starts from Sep 2022/Offer Received, TBD)
        `,
        }}
      />
      <Displayer
        i={3}
        data={{
          question:
            "How would you rate your understanding of JavaScript fundamentals (could be better)1-5 (excellent)",
          answer: `4(Good)`,
        }}
      />
      <Displayer
        i={4}
        data={{
          question:
            "How many hours per week (on average) do you spend coding in JS",
          answer: `10-40 Hours, depending on the project timeline. Normally I spend 10-20 Hours on JS coding. On some occasions when I encounter heavy project pipeline, which usually happens once per quarter, I spend nearly or more than 40 Hours per week solely on Javascript coding.
        `,
        }}
      />
      <Displayer
        i={5}
        data={{
          question:
            "When did you start working with JavaScript? Is your JavaScript experience mostly in vanilla JavaScript or do you rely only on libraries and frameworks?",
          answer: `I started to use Javascript from Jan 2021, and developed it professionally(that is, conducted an end-to-end project with JS) from Jun 2021. All of my fully developed projects are developed upon React, but that does not insist on unfamiliarity within vanilla JS.
        `,
        }}
      />
    </S.StyledSector2>
  );
}
export default Sector2;

Sector2.propTypes = {};
