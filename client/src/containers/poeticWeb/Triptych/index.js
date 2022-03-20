import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import deepai from "deepai";
import axios from "axios";
import useResize from "@U/hooks/useResize";
import Hydra from "hydra-synth";

const NewsComp = ({ news }) => {
  return (
    <S.NewsContainer>
      <S.NewsTitle>{news.topic}</S.NewsTitle>
      <S.NewsAbstract>{news.abstract}</S.NewsAbstract>
    </S.NewsContainer>
  );
};

const HydraComp = () => {
  const canvasRef = useRef();

  const [windowWidth, windowHeight] = useResize();
  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = windowWidth;
      canvasRef.current.height = windowHeight / 3;
      const h = new Hydra({ canvas: canvasRef.current, detectAudio: false }).synth;
      h.osc().rotate().out();
    }
  }, [canvasRef]);

  return (
    <S.HydraContainer>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </S.HydraContainer>
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
      <HydraComp />
      {newsSets[3] && <NewsComp news={newsSets[3]} />}
      <HydraComp />
    </S.Container>
  );
}
