import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import deepai from "deepai";
import axios from "axios";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const Element = ({ newsSets }) => {
  const [newsIdx, setNewsIdx] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [color, setColor] = useState({
    background: `rgb(255,255,255)`,
    text: "black",
  });

  return (
    <S.LargeSector>
      <S.Sector seconds={seconds} background={color.background} color={color.text}>
        <S.Header>{newsSets[newsIdx].title}</S.Header>
      </S.Sector>
    </S.LargeSector>
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

  console.log(newsSets.length);

  return (
    <S.Container ref={containerRef}>
      {newsSets.map((news, i) => (
        <S.NewsEl>
          <S.NewsTitle>{news.title}</S.NewsTitle>
          <S.NewsAbstract>{news.abstract}</S.NewsAbstract>
        </S.NewsEl>
      ))}
    </S.Container>
  );
}
