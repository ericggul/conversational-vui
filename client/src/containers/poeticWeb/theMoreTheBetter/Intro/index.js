import { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import deepai from "deepai";
import axios from "axios";
import { BasicHeaderContainer } from "@/foundations/poeticWeb/TheMoreTheBetter/IntroHeader";

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
        pathname: "/the-more-the-better/detail",
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
      {newsSets.length > 0 && newsSets.slice(0, 5).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i)} text={news.title ? news.title : ""} />)}
      <BasicHeaderContainer text="Live from World" header />
      {newsSets.length > 0 && newsSets.slice(5, 10).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i + 5)} text={news.title ? news.title : ""} />)}
      <BasicHeaderContainer text="Breaking News" header />
      {newsSets.length > 0 && newsSets.slice(10, 15).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i + 10)} text={news.title ? news.title : ""} />)}
      <BasicHeaderContainer text="Like, Comment, Subscribe" header />
      {newsSets.length > 0 && newsSets.slice(15, 20).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i + 15)} text={news.title ? news.title : ""} />)}
      <BasicHeaderContainer text="Breaking News" header />
    </S.Container>
  );
}
