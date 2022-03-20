import { useEffect, useState, useRef } from "react";
import * as S from "./styles";
import deepai from "deepai";
import axios from "axios";

const generateElement = (news) => {
  const sector = document.createElement("div");
  const header = document.createElement("div");
  const body = document.createElement("div");

  sector.style.display = "flex";
  sector.style.flexDirection = "column";
  sector.style.justifyContent = "center";
  sector.style.alignItems = "center";
  header.style.fontSize = "3rem";
  header.style.fontWeight = "bold";
  header.style.width = "80%";
  header.style.margin = "1rem";
  body.style.fontSize = "1rem";
  body.style.width = "80%";
  body.style.margin = "1rem";

  header.innerHTML = news.title;
  body.innerHTML = news.abstract;
  sector.appendChild(header);
  sector.appendChild(body);
  return sector;
};

const Element = ({ news }) => {
  return (
    <S.Sector>
      <S.Header>{news.title}</S.Header>
      <S.Body>{news.abstract}</S.Body>
    </S.Sector>
  );
};

export default function SplittedWeb() {
  const [news, setNews] = useState({
    title: "",
    abstract: "",
  });

  const [newsArray, setNewsArray] = useState([]);
  const [nextKeyword, setNextKeyword] = useState("");

  const NYTIMES_API_KEY = "80GOFZe14tQYlGjepOwgAsSvrqijaSzo";
  const DEEPAI_API_KEY = "9a58cd15-c026-4c76-a3fb-0ee0fd6516ee";

  useEffect(() => {
    deepai.setApiKey(DEEPAI_API_KEY);
    async function generateNews(givenText) {
      try {
        let res = await deepai.callStandardApi("text-generator", {
          text: givenText,
        });
        setNews((news) => ({ ...news, abstract: res.output }));
      } catch (error) {
        console.log(error);
      }
    }
    if (news.abstract) {
      generateNews(news.abstract);
    }
  }, [news.title]);

  useEffect(() => {
    async function getFirstNews() {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NYTIMES_API_KEY}`,
        });

        console.log(res.data.results[10]);
        setNextKeyword(res.data.results[0].des_facet[0]);
        let news = {
          title: res.data.results[0].title,
          abstract: res.data.results[0].abstract,
        };
        setNews(news);
        setNewsArray((array) => [...array, news]);
      } catch (error) {
        console.log(error);
      }
    }

    getFirstNews();
  }, []);

  useEffect(() => {
    if (nextKeyword) {
      getNextNews();
    }
  }, [nextKeyword]);

  async function getNextNews() {
    console.log(nextKeyword);
    try {
      let res = await axios.request({
        method: "GET",
        //   url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NYTIMES_API_KEY}`,
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${nextKeyword}&api-key=${NYTIMES_API_KEY}`,
      });

      let docs = res.data.response.docs;
      let selectedIdx = Math.floor(Math.random() * docs.length);

      setNextKeyword(docs[selectedIdx].keywords.length > 0 ? docs[selectedIdx].keywords[1].value : docs[selectedIdx].keywords[0].value);
      let news = {
        title: docs[selectedIdx].headline.main,
        abstract: docs[selectedIdx].abstract,
      };
      setNewsArray((array) => [...array, news]);
    } catch (error) {
      console.log(error);
    }
  }
  //Click Action

  const containerRef = useRef();

  const [clicked, setClicked] = useState(1);

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

  const clickAction = () => {
    if (containerRef && containerRef.current && newsArray) {
      getNextNews();
      const sector = generateElement(newsArray && newsArray[newsArray.length - 1]);

      containerRef.current.appendChild(sector);
      setClicked((click) => click + 1);
      speak(news.title);
    }
  };

  useEffect(() => {
    if (clicked === 4) {
      containerRef.current.style.display = "grid";
      containerRef.current.style.gridTemplateColumns = "repeat(2, 50vw)";
    }
    if (clicked % 2 == 0 && clicked > 3) {
      containerRef.current.style.gridTemplateColumns = `repeat(${clicked / 2}, ${200 / clicked}vw)`;
    }
  }, [clicked]);

  return (
    <S.Container ref={containerRef} onClick={clickAction}>
      <Element news={news} />
    </S.Container>
  );
}
