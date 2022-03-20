import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import deepai from "deepai";
import axios from "axios";
import useResize from "@U/hooks/useResize";

const Header = ({ text = "Breaking News" }) => {
  const [dir, setDir] = useState(1);
  const ref = useRef();
  const [elWidth, setElWidth] = useState(0);
  const [windowWidth, windowHeight] = useResize();
  const [elNumber, setElNumber] = useState(1);
  const [rotateSec, setRotateSec] = useState(3);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      setElWidth(ref.current.offsetWidth);
    }
  }, [ref, windowWidth]);

  useEffect(() => {
    if (elWidth !== 0 && windowWidth !== 0) {
      setElNumber(Math.floor((windowWidth * 2) / elWidth));
      setRotateSec((windowWidth / 400) * 5);
      setVisible(true);
    }
  }, [elWidth, windowWidth]);

  return (
    <S.HeaderContainer visible={visible}>
      {new Array(elNumber).fill(0).map((e, i) => (
        <S.Header key={i} idx={i} dir={dir} elNumber={elNumber} rotateSec={rotateSec} ref={ref}>
          {text}{" "}
        </S.Header>
      ))}
    </S.HeaderContainer>
  );
};

export default function WebText() {
  const [newsSets, setNewsSets] = useState([]);

  const NYTIMES_API_KEY = "80GOFZe14tQYlGjepOwgAsSvrqijaSzo";
  const DEEPAI_API_KEY = "9a58cd15-c026-4c76-a3fb-0ee0fd6516ee";

  useEffect(() => {
    deepai.setApiKey(DEEPAI_API_KEY);
    async function getFirstNews() {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${NYTIMES_API_KEY}`,
        });

        console.log(res.data.results[0]);

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

  return (
    <S.Container ref={containerRef}>
      <Header text="Breaking News" />

      {newsSets.length > 0 &&
        newsSets.slice(0, 5).map((news, i) => (
          <S.NewsEl>
            <S.NewsTitle>{news.title}</S.NewsTitle>
            <S.NewsAbstract>{news.abstract}</S.NewsAbstract>
          </S.NewsEl>
        ))}

      <Header text="Live from World" />

      {newsSets.length > 0 &&
        newsSets.slice(5, 10).map((news, i) => (
          <S.NewsEl>
            <S.NewsTitle>{news.title}</S.NewsTitle>
            <S.NewsAbstract>{news.abstract}</S.NewsAbstract>
          </S.NewsEl>
        ))}
      <Header text="Breaking News" />
    </S.Container>
  );
}
