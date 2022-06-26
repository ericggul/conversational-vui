import React, { useEffect, useState, useRef, useMemo } from "react";
import useSocketInputRecord from "utils/hooks/causeAndEffect/useSocketInputRecord";
import Canvas from "./utils/canvas";
import html2canvas from "html2canvas";
import uploadImage from "./utils/uploadFirestore";

import { io } from "socket.io-client";

import * as S from "./styles";

function Drawing() {
  const socket = useMemo(() => io("http://localhost:8000"), []);

  //hooks
  const record = useSocketInputRecord();

  //states
  const [storedText, setStoredText] = useState("");
  const [sessionOn, setSessionOn] = useState(false);
  const [canvases, setCanvases] = useState([]);
  const [canvasIdx, setCanvasIdx] = useState(0);

  //ref
  const containerRef = useRef(null);

  useEffect(() => {
    if (!record || record.text === "") {
      handleTextReset();
      return;
    }
    setSessionOn(true);
  }, [record]);

  async function handleTextReset() {
    await screenShot();
    setCanvasIdx(0);
    setSessionOn(false);
    cancelCanvases();
    setStoredText("");
  }

  async function screenShot() {
    try {
      if (containerRef && containerRef.current && sessionOn) {
        const canvasScreenShot = await html2canvas(containerRef.current, { scale: 2 });
        const image = canvasScreenShot.toDataURL("image/png");
        const str = image.replace(/^data:image\/png;base64,/, "");
        const buffer = Buffer.from(str, "base64");
        uploadImage({ image: buffer, text: storedText, socket });
      }
    } catch (e) {
      console.log(e);
    }
  }

  function cancelCanvases() {
    canvases.forEach((canvas) => canvas.destroy());
    setCanvases([]);
  }

  useEffect(() => {
    if (sessionOn && record && record.text) {
      setCanvasIdx((idx) => idx + 1);
      setStoredText(record.text);
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
      <div id="canvas-render" ref={containerRef} />
    </S.StyledDrawing>
  );
}
export default Drawing;
