import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import deepai from "deepai";
import HydraComp from "@/foundations/poeticWeb/background/hydra/HydraComp1";
import ContentsComp from "@F/poeticWeb/contents/ContentsComp";
import MonoComp from "@/foundations/poeticWeb/background/mono/MonoComp1";
import { useHistory } from "react-router-dom";
import tf from "@tensorflow/tfjs";

const use = require("@tensorflow-models/universal-sentence-encoder");
const toxicity = require("@tensorflow-models/toxicity");

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomColor = () => `rgb(${getRandom(220, 256)},${getRandom(50, 100)}, ${getRandom(50, 100)})`;

const NewsComp = ({ news }) => {
  const array = news.abstract.split(" ");

  return (
    <S.NewsContainer>
      <S.NewsAbstract>{news.abstract}</S.NewsAbstract>
    </S.NewsContainer>
  );
};

export default function WebText(props) {
  const history = useHistory();

  console.log(history.location.state.newsSets);
  const [news, setNews] = useState(history.location.state.newsSets);

  const NYTIMES_API_KEY = "80GOFZe14tQYlGjepOwgAsSvrqijaSzo";
  const DEEPAI_API_KEY = "9a58cd15-c026-4c76-a3fb-0ee0fd6516ee";

  use.load().then((model) => {
    const sentences = ["Hello.", "How are you?"];

    model.embed(sentences).then((embeddings) => {
      embeddings.print(true);
    });
  });

  toxicity.load().then((model) => {
    const sentences = ["new", "old"];

    model.classify(sentences).then((predictions) => {
      console.log(predictions);
    });
  });

  useEffect(() => {
    deepai.setApiKey(DEEPAI_API_KEY);
  }, []);

  const containerRef = useRef();

  return (
    <S.Container ref={containerRef}>
      <HydraComp />
      <ContentsComp news={news} />
      {/* {news && <NewsComp news={news} />}
      <HydraComp /> */}
    </S.Container>
  );
}
