import React, { useEffect, useState } from "react";
import useSocketInputRecord from "utils/hooks/causeAndEffect/useSocketInputRecord";
import Canvas from "./canvas";
import * as S from "./styles";

function Drawing() {
  //hooks
  const record = useSocketInputRecord();

  //states
  const [sessionOn, setSessionOn] = useState(false);
  const [canvas, setCanvas] = useState(null);

  //canvas installation, based on sessionon state
  useEffect(() => {
    if (sessionOn) {
      let canvasEl = new Canvas();
      setCanvas(canvasEl);
      return () => canvasEl.destroy();
    }
    if (!sessionOn && canvas) {
      canvas.destroy();
      setCanvas(null);
    }
  }, [sessionOn]);

  useEffect(() => {
    //sessionOn State
    if (record) {
      setSessionOn(true);
    } else {
      setSessionOn(false);
    }
  }, [record]);

  return (
    <S.StyledDrawing>
      <div id="canvas-render" />
    </S.StyledDrawing>
  );
}
export default Drawing;
