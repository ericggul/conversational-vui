import { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

import { NYTIMES_API_KEY } from "@ST/apikey";
import axios from "axios";
import { BasicHeaderContainer } from "@/foundations/newsAndMedia/suggestions/IntroHeader";

export default function WebText() {
  const [newsSets, setNewsSets] = useState([]);

  useEffect(() => {
    console.log("Suggestions(2022), Jeanyoon Choi");
    console.log("This web art work ");
  }, []);

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

  const history = useHistory();
  const newsElClick = useCallback(
    (i) => {
      history.push({
        pathname: "/recommendations/detail",
        state: {
          newsSets: newsSets[i],
        },
      });
    },
    [newsSets]
  );

  return (
    <S.Container ref={containerRef}>
      <BasicHeaderContainer text="Breaking News" header />
      {newsSets.length > 0 ? newsSets.slice(0, 5).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i)} text={news.title || ""} />) : <S.EmptyRow />}
      <BasicHeaderContainer text="Live from World" header />
      {newsSets.length > 0 ? newsSets.slice(5, 10).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i + 5)} text={news.title || ""} />) : <S.EmptyRow />}
      <BasicHeaderContainer text="Breaking News" header />
      {newsSets.length > 0 ? newsSets.slice(10, 15).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i + 10)} text={news.title || ""} />) : <S.EmptyRow />}
      <BasicHeaderContainer text="Like, Comment, Subscribe" header />
      {newsSets.length > 0 ? newsSets.slice(15, 20).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i + 15)} text={news.title || ""} />) : <S.EmptyRow />}
      <BasicHeaderContainer text="Breaking News" header />
    </S.Container>
  );
}
