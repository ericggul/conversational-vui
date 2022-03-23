import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import axios from "axios";
import useResize from "@U/hooks/useResize";
const getRandom = (a, b) => Math.random() * (b - a) + a;

export default function WebText() {
  const [newsSets, setNewsSets] = useState([]);

  const NYTIMES_API_KEY = "80GOFZe14tQYlGjepOwgAsSvrqijaSzo";

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

  const containerRef = useRef();
  const [windowWidth, windowHeight] = useResize();

  return (
    <S.Container ref={containerRef}>
      {newsSets.map((news, i) => {
        return new Array(10).fill(0).map((e, j) => (
          <S.NewsEl key={i * 100 + j} top={getRandom(0, windowHeight)} left={getRandom(0, windowWidth)}>
            <S.NewsTitle>{news.title}</S.NewsTitle>
            <S.NewsAbstract>{news.abstract}</S.NewsAbstract>
          </S.NewsEl>
        ));
      })}
    </S.Container>
  );
}
