import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import * as S from "./styles";
import "./youtube.css";
import useResize from "@/utils/hooks/useResize";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { YOUTUBE_API_KEY } from "@/static/apikey";
import axios from "axios";
import { speak } from "@U/functions/speech";

import { useHistory } from "react-router-dom";

const getPowerofTwo = (a) => {
  if (a === 0) {
    return 0;
  }
  let power = 0;
  let num = a;
  while (num % 2 === 0) {
    num = num / 2;
    power++;
  }
  return power;
};

const TEMP_DATA = [
  {
    kind: "youtube#searchResult",
    etag: "v--V9RQS7G8vzZoT_PG-dHZ8U4Q",
    id: {
      kind: "youtube#video",
      videoId: "RE1pxGaXxQw",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "BtAtjIw8NiJJJ0i3IIL8VR2MoZg",
    id: {
      kind: "youtube#video",
      videoId: "yvcG5hYGcaA",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "RTwvxzR9-Dupo2U0G3Q-pDB_XP0",
    id: {
      kind: "youtube#video",
      videoId: "eRbSVMEn4rc",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "FLigV_B1qTLxi6FWvlvo4h_XD14",
    id: {
      kind: "youtube#video",
      videoId: "IsXB5eRMRno",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "MhQYGXhMs693NwJElGQ99fmA_f0",
    id: {
      kind: "youtube#video",
      videoId: "DcflHgLJXR4",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "tip1u5EWEtDhYjK5LEiJfWI4pcI",
    id: {
      kind: "youtube#video",
      videoId: "HoxsF5Bdqlk",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6OxpA8vewb_k6VAJyFY1h1u-z6o",
    id: {
      kind: "youtube#video",
      videoId: "8H-VddO2xMA",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "GFO3jCm6ZNWS90oVihpr2_IqDsY",
    id: {
      kind: "youtube#video",
      videoId: "Xu2yAQEgYLo",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "BAtJ9z-6UBtf-FcO_X5T22kayuc",
    id: {
      kind: "youtube#video",
      videoId: "n-R86ERRlYU",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "oQTCDYyViE6jYjm1Czzkdt0sjYg",
    id: {
      kind: "youtube#video",
      videoId: "lV-6aaW4tO8",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ek_3jYgzsmiseBARRRBFetMrbEY",
    id: {
      kind: "youtube#video",
      videoId: "pVhqTD1SUZY",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "uYAGSJfiIi7U-3Lr5wj_JCTBjoY",
    id: {
      kind: "youtube#video",
      videoId: "e89F5X0bIxE",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "gBPpkWFjEnWCouaJUx9Z5HQvGQQ",
    id: {
      kind: "youtube#video",
      videoId: "o5Na5BjEatk",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "sqpFmCxkypvRl-uhK7o-hzv32OM",
    id: {
      kind: "youtube#video",
      videoId: "icQ7Xu-zycQ",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "69HazLNZJfHDB0bhtwgTDkAzztw",
    id: {
      kind: "youtube#video",
      videoId: "vn0WylayFxk",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "p1xlJlMpmKFq91zAIR5eAxGiRtU",
    id: {
      kind: "youtube#video",
      videoId: "Li2DGY1VMzE",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "kJHj40zRud-NVitWKRETjpVHIL4",
    id: {
      kind: "youtube#video",
      videoId: "GVse8hfaO4s",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "nJJrGj2Tej6Ow0Lwk9o2_JVBNcI",
    id: {
      kind: "youtube#video",
      videoId: "7lIsETbTdI4",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "RaTNApPrmpEcdAP_zXVqNj0jXD8",
    id: {
      kind: "youtube#video",
      videoId: "ri9EP3QIvMU",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "PZ8itgRLffi3PaEohjWCYRDs3ik",
    id: {
      kind: "youtube#video",
      videoId: "6dcLvxE8hiI",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "pyypYc4Hyxabxf-kolvBhao58QA",
    id: {
      kind: "youtube#video",
      videoId: "NfvJs8tceGQ",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "dNnODEW4Ql5DN_5V92YQD0CR4G4",
    id: {
      kind: "youtube#video",
      videoId: "JtuGIzodT-M",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "VgHZ5Ihlobcjfg3CR7UO4aPc03Q",
    id: {
      kind: "youtube#video",
      videoId: "yrpU1EAljNI",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6fghjH1kVrG2kZMKxH2-5Njc9J4",
    id: {
      kind: "youtube#video",
      videoId: "PD2wYuKytQc",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "vSEopB_5adVQ0XGnSm1kOLEy2g8",
    id: {
      kind: "youtube#video",
      videoId: "_jBfu0FHzjU",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Ffa7rhX33Jb6daIrbtT4jrvINwk",
    id: {
      kind: "youtube#video",
      videoId: "PI3NkflNDNY",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Anx0OqdzL7nTrTf0lNdS35180eQ",
    id: {
      kind: "youtube#video",
      videoId: "UD0KBHjiMnI",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "H0puF_Jtn1gzzjI_nv7We-X7R6c",
    id: {
      kind: "youtube#video",
      videoId: "QsbVRmhL1YM",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "9PwP-J_j1zB-tdZ2oXStfD1qe1A",
    id: {
      kind: "youtube#video",
      videoId: "ewLpXw6uN28",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "d6V9KqPS-Zc9lRXHn0bSQOV_2Pg",
    id: {
      kind: "youtube#video",
      videoId: "ExGzkEg-YME",
    },
  },
];

const getRandom = (a, b) => Math.random() * (b - a) + a;

const VideoWrapper = ({ videoId, i, widthHeight }) => {
  const widthUnit = useMemo(() => getRandom(0.8, getRandom(0.5, 1.3)), []);

  const [dimensions, setDimensions] = useState({
    top: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
    left: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
    width: widthUnit,
  });
  const [show, setShow] = useState(false);
  const opacity = useMemo(() => getRandom(0.15, 0.4), []);
  const showTime = useMemo(
    () => ({
      start: 1200 * i,
      end: 1200 * i + 1200 * 30,
    }),
    []
  );

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShow(true);
    }, showTime.start);
    const timeout2 = setTimeout(() => {
      setShow(false);
    }, showTime.end);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <S.VideoWrapper dimensions={dimensions} opacity={opacity}>
      {/* <LiteYouTubeEmbed id={videoId} title="video" autoplay="true" activeClass="lyt-activated" playerClass="lty-playbtn" wrapperClass="yt-lite" /> */}
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
          }}
        />
      )}
    </S.VideoWrapper>
  );
};

const ContentsComp = ({ news }) => {
  const [vidArray, setVidArray] = useState([]);

  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    speak(news.abstract);

    async function getYoutubeData(keyword) {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&q=${keyword}&maxResults=50`,
        });
        setVidArray((vidArray) => [...vidArray, ...res.data.items]);
      } catch (e) {
        console.log(e);
      }
    }

    news.des_facet.forEach((data) => {
      getYoutubeData(data);
    });
  }, []);

  const history = useHistory();
  useEffect(() => {
    if (vidArray.length > 0) {
      const timeout = setTimeout(() => {
        history.goBack();
      }, vidArray.length * 1200 + 1200 * 15);

      return () => clearTimeout(timeout);
    }
  }, [vidArray]);

  return <S.ElementContainer>{vidArray.length > 0 && vidArray.map((vid, i) => <VideoWrapper videoId={vid.id.videoId} i={i} widthHeight={windowWidth > windowHeight} key={i} />)}</S.ElementContainer>;
};

export default ContentsComp;
