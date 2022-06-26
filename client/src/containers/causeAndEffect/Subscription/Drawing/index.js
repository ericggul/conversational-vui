import React, { useEffect, useState } from "react";
import useSocketInputRecord from "utils/hooks/causeAndEffect/useSocketInputRecord";
import Canvas from "./canvas";
import * as S from "./styles";

function Drawing() {
  //hooks
  const record = useSocketInputRecord();

  //states
  const [sessionOn, setSessionOn] = useState(false);
  const [canvases, setCanvases] = useState([]);
  const [canvasIdx, setCanvasIdx] = useState(0);

  useEffect(() => {
    if (!record || record.text === "") {
      setCanvasIdx(0);
      setSessionOn(false);
      cancelCanvases();
      return;
    }
    setSessionOn(true);
  }, [record]);

  function cancelCanvases() {
    canvases.forEach((canvas) => canvas.destroy());
    setCanvases([]);
  }

  useEffect(() => {
    if (sessionOn && record) {
      setCanvasIdx((idx) => idx + 1);
      handleDraw();
    }
  }, [record, sessionOn]);

  function handleDraw() {
    let canvas = new Canvas(canvasIdx);
    canvas.animate(record);
    setCanvases([...canvases, canvas]);
  }

  return (
    <S.StyledDrawing>
      <div id="canvas-render" />
    </S.StyledDrawing>
  );
}
export default Drawing;
