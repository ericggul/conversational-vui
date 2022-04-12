import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import * as S from "./styles";
import "./youtube.css";
import useResize from "@/utils/hooks/useResize";
import YouTube from "react-youtube";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { YOUTUBE_API_KEY } from "@/static/apikey";
import axios from "axios";
import { speak } from "@U/functions/speech";

import { DER_HOLLE, LA_DONNA, O_MIO, CASTA_DIVA } from "./data.js";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const VideoWrapper = ({ videoId, i, widthHeight }) => {
  const widthUnit = useMemo(() => getRandom(0.8, getRandom(0.5, 1.0)), []);

  const [dimensions, setDimensions] = useState({
    top: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
    left: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
    width: widthUnit,
  });
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0.2);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDimensions({
        top: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
        left: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
        width: widthUnit,
      });
      setOpacity(Math.random() < 0.1 ? 1 : 0);

      window.setTimeout(() => {
        setOpacity(0.15);
      }, getRandom(600, 1000));
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <S.VideoWrapper dimensions={dimensions} opacity={opacity}>
      {/* <LiteYouTubeEmbed id={videoId} title="video" autoplay="true" activeClass="lyt-activated" playerClass="lty-playbtn" wrapperClass="yt-lite" /> */}
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
        }}
      />
    </S.VideoWrapper>
  );
};

const ContentsComp = () => {
  const [vidArray, setVidArray] = useState(DER_HOLLE);
  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    async function getYoutubeData() {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&q=casta+diva&maxResults=100`,
        });

        console.log(res);
        setVidArray((vidArray) => [...vidArray, ...res.data.items]);
      } catch (e) {
        console.log(e);
      }
    }

    // getYoutubeData();
  }, []);

  return <S.ElementContainer>{vidArray.length > 0 && vidArray.map((vid, i) => <VideoWrapper videoId={vid.id.videoId} i={i} widthHeight={windowWidth > windowHeight} key={i} />)}</S.ElementContainer>;
};

export default ContentsComp;
