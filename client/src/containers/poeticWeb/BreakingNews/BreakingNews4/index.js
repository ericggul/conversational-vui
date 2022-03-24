import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import * as S from "./styles";
import axios from "axios";
import useResize from "@U/hooks/useResize";
import { useMouseOrTouchPos } from "@U/hooks/useMousePos";
const getRandom = (a, b) => Math.random() * (b - a) + a;

const NewsEl = ({ news, j, i, windowWidth, windowHeight }) => {
  const test = news.asset_id % (i + 10);
  const date = news.published_date.split("-")[2];
  const updated_time = news.updated.split(" ")[1].split(":");

  const top = useMemo(() => (Math.abs(date % (test + j)) * 0.1 + ((j * i) % 30) / 150 + ((j - i) % 31) / 101) * windowHeight, [news, j, i]);
  const left = useMemo(() => ((parseInt(date) - 15) / 15) * windowWidth, [news, j, i]);

  const opacity = ((j + i) ** 3 % 17) / 100 + ((j + parseInt(date)) % 19) / 100 + Math.min(Math.abs(j - i / 4) ** 3 / 1000, 1);

  return (
    <S.NewsEl key={i * 100 + j} top={top} left={left} opacity={opacity}>
      <S.NewsTitle size={Math.abs(((j - i) * (j + i)) % 10) / 10 + 1.5}>{news.title}</S.NewsTitle>
      <S.NewsAbstract size={1}>{news.abstract}</S.NewsAbstract>
    </S.NewsEl>
  );
};

export default function WebText() {
  const [newsSets, setNewsSets] = useState([]);

  const NYTIMES_API_KEY = "80GOFZe14tQYlGjepOwgAsSvrqijaSzo";
  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    async function getFirstNews() {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${NYTIMES_API_KEY}`,
        });

        setNewsSets(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFirstNews();
  }, []);

  console.log(newsSets[0]);
  const containerRef = useRef();

  //asset_id 100000008258714
  //updated: 2022-03-21 23:19:08

  return (
    <S.Container ref={containerRef}>
      {new Array(10).fill(0).map((e, j) => {
        return newsSets.map((news, i) => <NewsEl news={news} i={i} j={j} windowWidth={windowWidth} windowHeight={windowHeight} />);
      })}
    </S.Container>
  );
}
