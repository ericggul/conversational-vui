import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";

import useResize from "@/utils/hooks/useResize";
import { YOUTUBE_API_KEY } from "@/static/apikey";
import axios from "axios";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const VideoWrapper = ({ videoId }) => {
  const [dimensions, setDimensions] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const widthUnit = getRandom(0.1, getRandom(0.3, 1));

  useEffect(() => {
    setDimensions({
      top: getRandom(-widthUnit, 1),
      left: getRandom(-widthUnit, 1),
      width: widthUnit,
    });
  }, []);

  return (
    <S.VideoWrapper dimensions={dimensions}>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="autoplay" title="Youtube" frameborder="0" border="0" cellspacing="0" style="border-style: none;" />
    </S.VideoWrapper>
  );
};

const ContentsComp = ({ news }) => {
  const canvasRef = useRef();

  const [vidArray, setVidArray] = useState([]);
  const [vidUrl, setVidUrl] = useState("");

  console.log(news.des_facet);
  useEffect(() => {
    async function getYoutubeData() {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&q=${news.des_facet[0]}&maxResults=50`,
        });
        console.log(res);
        setVidArray(res.data.items);
        setVidUrl(res.data.items[0].id.videoId);
      } catch (e) {
        console.log(e);
      }
    }

    getYoutubeData();
  }, []);

  return (
    <S.ElementContainer>
      {vidArray.slice(0, 30).map((vid, i) => (
        <VideoWrapper videoId={vid.id.videoId} />
      ))}
    </S.ElementContainer>
  );
};

export default ContentsComp;
