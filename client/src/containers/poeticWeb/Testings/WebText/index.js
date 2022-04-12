import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";

import { NYTIMES_API_KEY } from "@ST/apikey";
import axios from "axios";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const Element = ({ initialNews }) => {
  const [news, setNews] = useState(initialNews);

  const [color, setColor] = useState({
    background: `rgb(${getRandom(0, 250)}, 255, 255)`,
    text: "black",
  });

  const [changed, setChanged] = useState(true);

  useEffect(() => {
    if (changed && news.abstract) {
      setChanged(false);

      mergeText(news.abstract).then(() => {
        setChanged(true);
        setColor((color) => ({ ...color, background: `rgb(${getRandom(0, 250)}, 255, 255)` }));
      });
    }
  }, [changed]);

  async function generateText(givenText) {
    try {
      let res = await deepai.callStandardApi("text-generator", {
        text: givenText,
      });
      return res.output;
    } catch (error) {
      console.log(error);
    }
  }

  async function mergeText(givenText) {
    console.log("merging");
    const l = givenText.split(". ").length;
    const sentence = givenText.split(". ")[l - 1].length > 10 ? givenText.split(". ")[l - 1] : givenText.split(". ")[l - 2];

    if (l >= 2) {
      const generatedResult = await generateText(sentence);
      let result =
        givenText
          .split(". ")
          .slice(0, l - 1)
          .reduce((a, b) => a + ". " + b) +
        ". " +
        generatedResult;
      setNews((news) => ({ ...news, abstract: result }));
    } else {
      const generatedResult = await generateText(givenText);

      let result = generatedResult;
      setNews((news) => ({ ...news, abstract: result }));
    }
  }

  const animationFrame = useRef(0);
  const lastUpdate = useRef(Date.now());

  const loop = useCallback(() => {
    const now = Date.now();
    const msPassed = Date.now() - lastUpdate.current;
    lastUpdate.current = now;

    const framesPassed = msPassed / 10;

    animationFrame.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    loop();
    return () => cancelAnimationFrame(animationFrame.current);
  }, [loop]);

  const timeInterval = getRandom(1000, 3000);
  useEffect(() => {
    let interval = window.setInterval(() => {
      setColor((color) => ({ ...color, background: `rgb(255, ${getRandom(0, 255)}, ${getRandom(0, 255)})` }));
    }, timeInterval);
    return () => window.clearInterval(interval);
  }, []);
  return (
    <S.LargeSector>
      <S.Sector background={color.background} color={color.text}>
        <S.Header>{news.title}</S.Header>
        <S.Body>{news.abstract}</S.Body>
      </S.Sector>
    </S.LargeSector>
  );
};

export default function WebText() {
  const [newsSets, setNewsSets] = useState([]);
  const [res, setRes] = useState([]);
  const [nextKeyword, setNextKeyword] = useState("");

  useEffect(() => {
    async function getFirstNews() {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NYTIMES_API_KEY}`,
        });

        let resultArray = [];
        for (let i = 0; i < res.data.results.length; i++) {
          let news = {
            title: res.data.results[i].title,
            abstract: res.data.results[i].abstract,
          };

          resultArray.push(news);
        }
        setNewsSets(resultArray);
      } catch (error) {
        console.log(error);
      }
    }
    getFirstNews();
  }, []);

  const containerRef = useRef();

  const speak = (text) => {
    let synth = window.speechSynthesis;
    var voices = window.speechSynthesis.getVoices();

    let utterance = new SpeechSynthesisUtterance(text.replace(".", "hee ha."));
    utterance.voice = voices[Math.floor(Math.random() * voices.length)];
    utterance.pitch = 1;
    utterance.speed = 1;
    utterance.pitch = 0.8;
    synth.speak(utterance);
  };

  return (
    <S.Container ref={containerRef}>
      {newsSets.map((news, i) => (
        <Element initialNews={news} />
      ))}
    </S.Container>
  );
}
