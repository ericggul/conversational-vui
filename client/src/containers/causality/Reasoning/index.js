import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";
import useSocketInputRecord from "@/utils/hooks/causeAndEffect/useSocketInputRecord";

function GiantStep() {
  //explanations
  useEffect(() => {
    console.log(`Reasoning uses GPT-3 to generate an answer for the trivial question, asking why is a keyword a keyword, where keyword is the user's input.`);
    console.log(`While answer for this question should be trivial, as A is always A, the GPT-3 model's response differs vastly accordingly to the inputted keyword.`);
    console.log(
      `This symbolically represents our narrative fallacy which tends to create false narrative to such a trivial question, as well as reveal that no AI model should be free from such a fallacy.`
    );
    console.log(
      `It reveals the sillines of process of 'reasoning', and that all AI models is bounded to such a process. Only a human(A certain type of human) is capable of creating through coincidences.`
    );
  }, []);

  const record = useSocketInputRecord();

  const timeout = useRef(null);

  useEffect(() => {
    if (record) {
      timeout.current = setTimeout(() => {
        generateSentence(record.text);
      }, 1500);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [record]);

  async function generateSentence(keyword) {
    if (keyword.length > 3) {
      try {
        const res = await axios.post(
          "/openai",
          { keyword },
          {
            responseType: "arraybuffer",
            "Access-Control-Allow-Origin": "*",
          }
        );

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

  return <S.StyledGiantStep>Reasoning</S.StyledGiantStep>;
}
export default GiantStep;
