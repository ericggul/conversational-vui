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

const TEMP_DATA = [
  {
    kind: "youtube#searchResult",
    etag: "8GL-UTp6OIvu_78ZhIeXF26ThTg",
    id: {
      kind: "youtube#video",
      videoId: "YuBeBjqKSGQ",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "lQkZwMYDMluT-8zyRm0SkcFHKE0",
    id: {
      kind: "youtube#video",
      videoId: "YQpTGKXAxqA",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Ca4VRehYMFvIrIcIlkK59aPtC-s",
    id: {
      kind: "youtube#video",
      videoId: "UImPf_Ir3_E",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "_E-CXEv0VHeMbbHEMqlUdTiFdSQ",
    id: {
      kind: "youtube#video",
      videoId: "41mE3kapPgc",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "xosg0rACnoVctZgF2Ek5-Nqjr2k",
    id: {
      kind: "youtube#video",
      videoId: "ZAiCbYc4hQ0",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4buCOC2rppMx0tWPSDeVDX6gp4w",
    id: {
      kind: "youtube#video",
      videoId: "CodvdRTX8zo",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "zykqaIe8GFepfAnMfOb2Im7WR18",
    id: {
      kind: "youtube#video",
      videoId: "JzFi-7H9TKs",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6evgQpijaFI2Pkh9eamtvgaTXGo",
    id: {
      kind: "youtube#video",
      videoId: "WY_UqpQQ_k4",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "2elPpcm-br8VyNanmVYcHB73f4Y",
    id: {
      kind: "youtube#video",
      videoId: "TsyapBa6P_k",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "bwrlEgo6KPo4-DPc32HhibJaqcs",
    id: {
      kind: "youtube#video",
      videoId: "D1-CbocY21E",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6qkUrx9Izf6L6PXf3RKC_vJVqU0",
    id: {
      kind: "youtube#video",
      videoId: "37DDSFsh2j0",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "HK50Huhi2RQqKOGK5zh3OtHV8eI",
    id: {
      kind: "youtube#video",
      videoId: "H_xfC9RXicU",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "iFgFyEibM0Ey0XVLnXvdt9wU1yY",
    id: {
      kind: "youtube#video",
      videoId: "J09NO78V3vg",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "p8eaf-DbLMtEQGED8udBeZ1IEiU",
    id: {
      kind: "youtube#video",
      videoId: "GwktricYP8o",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Tq16G8-iDyNjXzkXDNHrpTI_Tas",
    id: {
      kind: "youtube#video",
      videoId: "njgzI0T7hBI",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "yM1HJdKLTVohMX0lzwg_nB1ByaU",
    id: {
      kind: "youtube#video",
      videoId: "iVqG7AjZOBU",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "GONmvuEQNcZ_S3800xH9lsrV_Mo",
    id: {
      kind: "youtube#video",
      videoId: "yFG9yrUJIW8",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Oi909b92qhPAXCeMNb0Oh0olfmQ",
    id: {
      kind: "youtube#video",
      videoId: "ZNEOl4bcfkc",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "KMuRa5BTfniPX5BqOPkxZtUMVzk",
    id: {
      kind: "youtube#video",
      videoId: "GG1fs13rlZY",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Xpn8t71874PjTQ6PBQw27x50nbc",
    id: {
      kind: "youtube#video",
      videoId: "d8TaX7U1iKY",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "66yFG7zh9yROdJTfHj8HNd6y6Ko",
    id: {
      kind: "youtube#video",
      videoId: "SuU33M8xdyM",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "TzoNawqchlH5iqtIJlzAMmb1pQI",
    id: {
      kind: "youtube#video",
      videoId: "VApn9djQPHA",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "hs51hTQO0xxIUaU8EcbpxoLlBUQ",
    id: {
      kind: "youtube#video",
      videoId: "kZWxZX8mWsM",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "tCwej0YVocogG5uNSpfh3uwa5bw",
    id: {
      kind: "youtube#video",
      videoId: "02yf6RHIQjQ",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "3A--rF5tO4hpzoLXSYjfZq3qfwo",
    id: {
      kind: "youtube#video",
      videoId: "8GHSv8RLGlw",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "M7RqQQLiBBXb1EkFguJsBkatc4c",
    id: {
      kind: "youtube#video",
      videoId: "lnfAuIcnt-w",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "XI7CF5ry1rNvnAwutcy3dnZcFHM",
    id: {
      kind: "youtube#video",
      videoId: "pZcaf9GfyWs",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "X68Fry8dWKitNN2UHdNO-nZd2QE",
    id: {
      kind: "youtube#video",
      videoId: "KNYws1PNCH8",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "5ImC0prUHpJ11BDyp1uKpAq_mek",
    id: {
      kind: "youtube#video",
      videoId: "R-r8s5oljmo",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ILEfVBS-v8aoMcztLxIKb5NSknc",
    id: {
      kind: "youtube#video",
      videoId: "aLDSZV_EV-g",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "HZvd1oEqCc6pavgSA2Mv7Eg--2E",
    id: {
      kind: "youtube#video",
      videoId: "w4vuv554KEE",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "kkYBvkCGsUheZVJdg6LAGGviwqY",
    id: {
      kind: "youtube#video",
      videoId: "z2Vhlm7L2Rc",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "YO0uPt8mHBIIx8fXHPu3RG5yq2U",
    id: {
      kind: "youtube#video",
      videoId: "0jD9yk4qXy0",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "mhu_lg0D8-R9XC0b8yw93NUfaR0",
    id: {
      kind: "youtube#video",
      videoId: "xllK17NilSI",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "dpoIFjRbqxCKH9aiQM5BcNprD6E",
    id: {
      kind: "youtube#video",
      videoId: "KNQDVqaPydE",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "xxlWNa6gFkvoqbo2urCOEWC4bHc",
    id: {
      kind: "youtube#video",
      videoId: "Hh4JA3UFcOk",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "tp1wAcn-PAueLvWpF9omW_zNnBs",
    id: {
      kind: "youtube#video",
      videoId: "RjP0tdFsPUw",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "NbfL-w2tQ3FLlso6mS1I0gtWQnQ",
    id: {
      kind: "youtube#video",
      videoId: "-433_r54qVc",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "D1WSh415jyUIT2fS2I81JeDw-0c",
    id: {
      kind: "youtube#video",
      videoId: "3qmyWC38HVI",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "mQzZ-e_V86JthsfX-5tMmOr-VfI",
    id: {
      kind: "youtube#video",
      videoId: "S2ahUHyIe8c",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "3mplREeZNUKVulgcCPNYA6R6W_c",
    id: {
      kind: "youtube#video",
      videoId: "-HXHTHgNfnw",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "T7ik97SPi5Oppv0gxFN_tawnyJU",
    id: {
      kind: "youtube#video",
      videoId: "ATsCiQo745E",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "UVxvUBEhIUslqSnyoZnjkBRs3ow",
    id: {
      kind: "youtube#video",
      videoId: "Xn8PKEZv1_E",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "LiYpLB3xCIG-sqVvU70-g5GLtI4",
    id: {
      kind: "youtube#video",
      videoId: "z4EBvYDsFf0",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ei3SQyH5HRTiHY5jQqbCLy4Pq44",
    id: {
      kind: "youtube#video",
      videoId: "6G3XYJR5kB4",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "uFZ3VEHUywxXWWJAKivHQLceNFQ",
    id: {
      kind: "youtube#video",
      videoId: "qke_WbNGWh0",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ramKIQYsRqWexju6SY8RApF_OHA",
    id: {
      kind: "youtube#video",
      videoId: "trbnZ8NHDgw",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ORC2lwYk3o2iIuJNOqgPBSSFsho",
    id: {
      kind: "youtube#video",
      videoId: "Fn7i0l0UZO8",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4xfgbKu8lb_6ED3Czbz2L6LbrBM",
    id: {
      kind: "youtube#video",
      videoId: "BvdLnu16BbY",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ko3ivDEq20b8KOnIYHI0Sgvx16s",
    id: {
      kind: "youtube#video",
      videoId: "MCBTVdyL_XE",
    },
  },
];

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

const getRandom = (a, b) => Math.random() * (b - a) + a;

const UNIT = 5;
const VideoWrapper = ({ videoId, i, widthHeight }) => {
  const widthUnit = useMemo(() => getRandom(0.8, getRandom(0.5, 1.3)), []);

  const [dimensions, setDimensions] = useState({
    top: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
    left: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
    width: widthUnit,
  });
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0.05);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDimensions({
        top: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
        left: getRandom(-widthUnit * 0.3, 1 - widthUnit * 0.7),
        width: widthUnit,
      });
      setOpacity(Math.random() < 0.1 ? 1 : 0);

      window.setTimeout(() => {
        setOpacity(0.05);
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

const ContentsComp = ({ news }) => {
  const [vidArray, setVidArray] = useState([]);
  const [keywords, setKeywords] = useState([...news.des_facet, ...news.org_facet, ...news.per_facet]);
  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    speak(news.abstract);
    async function getYoutubeData(keyword) {
      try {
        let res = await axios.request({
          method: "GET",
          url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&q=${keyword}&maxResults=20`,
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

  return (
    <S.ElementContainer>
      {vidArray.length > 0 && vidArray.slice(0, Math.min(vidArray.length, 30)).map((vid, i) => <VideoWrapper videoId={vid.id.videoId} i={i} widthHeight={windowWidth > windowHeight} key={i} />)}
    </S.ElementContainer>
  );
};

export default ContentsComp;
