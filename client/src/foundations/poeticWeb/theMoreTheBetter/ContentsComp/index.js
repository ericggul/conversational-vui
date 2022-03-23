import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import useResize from "@/utils/hooks/useResize";
import { YOUTUBE_API_KEY } from "@/static/apikey";
import axios from "axios";
import { speak } from "@U/functions/speech";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const VideoWrapper = ({ videoId, i }) => {
  const [dimensions, setDimensions] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const [show, setShow] = useState(false);

  const widthUnit = getRandom(0.1, getRandom(0.5, 1));

  useEffect(() => {
    setDimensions({
      top: getRandom(-widthUnit, 1),
      left: getRandom(-widthUnit, 1),
      width: widthUnit,
    });

    const timeout = setTimeout(() => {
      setShow(true);
    }, i * 250);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.VideoWrapper dimensions={dimensions}>
      {show && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&controls=0`}
          allow="autoplay"
          title="Youtube"
          frameborder="0"
          border="0"
          cellspacing="0"
          style={{
            width: "100%",
            height: "100%",
            opacity: `${getRandom(0.1, 0.3)}`,
          }}
        />
      )}
    </S.VideoWrapper>
  );
};

const ContentsComp = ({ news }) => {
  const [vidArray, setVidArray] = useState([]);
  const [keywords, setKeywords] = useState([...news.des_facet, ...news.org_facet, ...news.per_facet]);

  useEffect(() => {
    speak(news);
    async function getYoutubeData(keyword) {
      try {
        console.log(keyword);
        let res = await axios.request({
          method: "GET",
          url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&q=${keyword}&maxResults=30`,
        });
        console.log(res.data);
        setVidArray((vidArray) => [...vidArray, ...res.data.items]);
      } catch (e) {
        console.log(e);
      }
    }

    getYoutubeData("henry");
  }, []);
  console.log(vidArray);

  return <S.ElementContainer>{vidArray.length > 0 && vidArray.map((vid, i) => <VideoWrapper videoId={vid.id.videoId} i={i} />)}</S.ElementContainer>;
};

export default ContentsComp;
