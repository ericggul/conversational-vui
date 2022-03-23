import { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import deepai from "deepai";
import axios from "axios";
import { BasicHeaderContainer } from "@F/poeticWeb/theMoreTheBetter/IntroHeader";

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

          resultArray.push(res.data.results[i]);
        }
        setNewsSets(resultArray);
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
      <BasicHeaderContainer text="Breaking News" />
      {newsSets.length > 0 && newsSets.slice(0, 5).map((news, i) => <BasicHeaderContainer onClick={() => newsElClick(i)} text={news.title} />)}
      <BasicHeaderContainer text="Live from World" />
      {newsSets.length > 0 && newsSets.slice(5, 10).map((news, i) => <BasicHeaderContainer text={news.title} />)}
      <BasicHeaderContainer text="Breaking News" />
      {newsSets.length > 0 && newsSets.slice(10, 15).map((news, i) => <BasicHeaderContainer text={news.title} />)}
      <BasicHeaderContainer text="Like, Comment, Subscribe" />
      {newsSets.length > 0 && newsSets.slice(15, 20).map((news, i) => <BasicHeaderContainer text={news.title} />)}
      <BasicHeaderContainer text="Breaking News" />
    </S.Container>
  );
}
