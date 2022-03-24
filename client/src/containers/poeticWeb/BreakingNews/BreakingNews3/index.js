import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import * as S from "./styles";
import axios from "axios";
import useResize from "@U/hooks/useResize";
import { useMouseOrTouchPos } from "@U/hooks/useMousePos";

const NewsEl = ({ news, j, i, windowWidth, windowHeight }) => {
  const test = news.asset_id % (j + 10);
  const updated_time = news.updated.split(" ")[1].split(":");

  const top = useMemo(() => (test / (j + 10)) * windowHeight - parseInt(updated_time[0]) * 10, [news, j, i]);
  const left = useMemo(() => (((news.asset_id % (news.des_facet.length + j + 5)) - 5) / 30) * windowWidth, [news, j, i]);

  return (
    <S.NewsEl key={i * 100 + j} top={top} left={left}>
      <S.NewsTitle>{news.title}</S.NewsTitle>
      <S.NewsAbstract>{news.abstract}</S.NewsAbstract>
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
          url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${NYTIMES_API_KEY}`,
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
