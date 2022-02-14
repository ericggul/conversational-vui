import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import PropTypes from "prop-types";
import * as S from "./styles";

function Sector3() {
  const Displayer = ({ data }) => {
    const [opened, setOpened] = useState(0);

    return (
      <Flip bottom delay={data.number * 120}>
        <S.Front
          open={opened % 2}
          onClick={() => setOpened((open) => open + 1)}
        >
          <S.Background open={opened % 2} />
          <S.Number bold={opened < 1}>{data.number}</S.Number>
          <S.Question>
            {opened % 2
              ? data.answer
                  .split("<br />")
                  .map((datum, i) => <div key={i}>{datum}</div>)
              : data.question}
          </S.Question>
        </S.Front>
      </Flip>
    );
  };

  return (
    <S.StyledSector3>
      <S.Header>Questions B</S.Header>
      <S.DisplayerGrid>
        <Displayer
          data={{
            number: 1,
            question: "If given a full time offer, when would you start?",
            answer:
              "I will be available from Sep 2023, after finishing studying for the RCA’s Information Experience Design masters program.",
          }}
        />
        <Displayer
          data={{
            number: 2,
            question:
              "Please confirm you want to be considered for the Front End Engineer Intern Program and why?",
            answer:
              "Being influenced by Sartre’s Existentialism, I believe that the Frontend development has a unique potential of bringing a message in an existential format. This is the fundamental reason I enjoy developing frontend.",
          }}
        />
        <Displayer
          data={{
            number: 3,
            question: "What are your strongest 2 or 3 programming languages?",
            answer:
              "Javascript and Python. Most of my Software Engineering projects are conducted upon Javascript.",
          }}
        />
        <Displayer
          data={{
            number: 4,
            question:
              "Tell me about any recent front end engineering experience or project you've worked on?",
            answer: `
            SNU(Seoul National University) Festival: Web-based University Festival during pandemic, aggregating nearly 10,000 users. <br />
            Contribution: Lead Developer(80% Contribution) <br />
            Link: snufestival.com	
            `,
          }}
        />
        <Displayer
          data={{
            number: 5,
            question:
              "Please explain your experience and understanding of data structures and algorithms?",
            answer:
              "A few. I had completed a Data Structures course as part of my undergraduate degree. I also have familiarity with the basics of Algorithms, but have not actively contributed to competitions.",
          }}
        />
        <Displayer
          data={{
            number: 6,
            question:
              "Have you competed in any coding competitions or hackathons?",
            answer:
              "I had not participated in any competitions so far. I found them intellectually charming, but rather, I had focused more on building feasible and deployable front-end websites.",
          }}
        />
        <Displayer
          data={{
            number: 7,
            question:
              "Do you have (or will you be anticipating) any offer deadlines or other interviews with other companies at the moment?",
            answer:
              "Not at this moment. Meta is my prior choice, as I deeply believe in the company’s vision towards the metaverse. I will also enjoy the opportunity to learn a lot from other senior developers.",
          }}
        />
      </S.DisplayerGrid>
    </S.StyledSector3>
  );
}
export default Sector3;

Sector3.propTypes = {};
