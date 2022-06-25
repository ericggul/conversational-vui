import React, { useRef } from "react";
import * as S from "./styles";
import axios from "axios";
import useSocketInputRecord from "@/utils/hooks/causeAndEffect/useSocketInputRecord";
import { useEffect } from "react";

function GiantStep() {
  const record = useSocketInputRecord();

  const timeout = useRef(null);

  useEffect(() => {
    if (record) {
      timeout.current = setTimeout(() => {
        console.log(record);
        generateSentence(record.text);
      }, 600);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [record]);

  async function generateSentence(keyword) {
    if (keyword.length > 3) {
      try {
        const res = await axios.post(
          "http://localhost:8000/openai",
          { keyword },
          {
            responseType: "arraybuffer",
            "Access-Control-Allow-Origin": "*",
          }
        );
        console.log(res.data);

        //play audio
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        const audioBuffer = await audioContext.decodeAudioData(res.data);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
      } catch (e) {
        console.log(e);
      }
    }
  }

  return <S.StyledGiantStep>GiantStep</S.StyledGiantStep>;
}
export default GiantStep;
