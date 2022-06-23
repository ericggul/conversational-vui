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

  console.log(record);
  console.log("drawing!");

  useEffect(() => {
    if (!record) {
      console.log("no record!");
      setSessionOn(false);
      cancelCanvases();
      return;
    }
    setSessionOn(true);
  }, [record]);

  function cancelCanvases() {
    console.log("cancel canvas!");
    canvases.forEach((canvas) => canvas.destroy());
    setCanvases([]);
  }

  useEffect(() => {
    if (sessionOn && record) {
      handleDraw();
    }
  }, [record, sessionOn]);

  function handleDraw() {
    let canvas = new Canvas();
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
