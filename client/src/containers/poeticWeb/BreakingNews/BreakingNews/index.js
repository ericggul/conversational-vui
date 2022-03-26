import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import * as S from "./styles";
import axios from "axios";
import useResize from "@U/hooks/useResize";
import POS_META_DATA from "@C/poeticWeb/BreakingNews/Data/data";

//test
import { test } from "../text/textTesting";

const NewsEl = ({ pageIdx, news, j, i, size }) => {
  const keywordArray = [...news.des_facet, ...news.geo_facet, ...news.org_facet, ...news.per_facet];
  const metaDataObject = useMemo(() => POS_META_DATA[pageIdx], [pageIdx]);
  const top = metaDataObject.top(news, i, j, size);
  const left = metaDataObject.left(news, i, j, size);
  const opacity = metaDataObject.opacity ? metaDataObject.opacity(news, i, j, size) : 0.2;
  const titleSize = metaDataObject.titleSize ? metaDataObject.titleSize(news, i, j, size) : 1.5;
  const abstractSize = metaDataObject.abstractSize ? metaDataObject.abstractSize(news, i, j, size) : 1;
  const textEditFunction = metaDataObject.textEditFunction ? metaDataObject.textEditFunction : (text) => text;

  return (
    <S.NewsEl key={i * 100 + j} top={top} left={left} opacity={opacity}>
      <S.NewsTitle size={titleSize}>{textEditFunction(news.title, keywordArray)}</S.NewsTitle>
      <S.NewsAbstract size={abstractSize}>{textEditFunction(news.abstract, keywordArray)}</S.NewsAbstract>
    </S.NewsEl>
  );
};

export default function WebText(props) {
  const pageIdx = useMemo(() => (props.match.params ? props.match.params.id : 0), [props]);

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
    // test();
    getFirstNews();
  }, []);

  console.log(newsSets[0]);

  return (
    <S.Container>
      {new Array(10).fill(0).map((e, j) => {
        return newsSets.map((news, i) => <NewsEl pageIdx={pageIdx} news={news} i={i} j={j} size={{ windowWidth: windowWidth, windowHeight: windowHeight }} />);
      })}
    </S.Container>
  );
}
