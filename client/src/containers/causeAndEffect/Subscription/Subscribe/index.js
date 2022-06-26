import React, { useEffect, useState, useMemo } from "react";
import * as S from "./styles";
import { FixedSizeGrid as Grid } from "react-window";
import { io } from "socket.io-client";

//utils
import useResize from "@U/hooks/useResize";
import retriveData from "./utils/retriveData";

const Font = ({ text }) => {
  return (
    <S.Text>
      {text
        .trim()
        .split("")
        .map((t, idx) => (
          <S.Span key={idx} bold={Math.random() < 0.3}>
            {t === " " ? "\u00A0" : t}
          </S.Span>
        ))}
    </S.Text>
  );
};

function Print() {
  const [imageData, setImageData] = useState([]);
  const socket = useMemo(() => io(), []);

  useEffect(() => {
    handleDataRetrive();
  }, []);

  useEffect(() => {
    socket.on("screen shot signal", handleDataRetrive);
    return () => {
      socket.off("screen shot signal", handleDataRetrive);
    };
  }, []);

  async function handleDataRetrive() {
    try {
      let data = await retriveData();
      setImageData(data);
    } catch (e) {
      console.log(e);
    }
  }

  const [windowWidth, windowHeight] = useResize();
  const width = useMemo(() => windowWidth / 3, [windowWidth]);
  const height = useMemo(() => windowHeight / 3 + 50, [windowHeight]);
  const colCount = useMemo(() => Math.floor(windowWidth / width), [windowWidth, width]);
  const rowCount = useMemo(() => Math.ceil(imageData.length / Math.floor(windowWidth / width)), [imageData, windowWidth, windowHeight, width]);

  const Cell = (props) => {
    const idx = useMemo(() => props.columnIndex + props.rowIndex * colCount, [props, colCount]);
    const data = useMemo(() => imageData[idx], [idx, imageData]);

    return (
      <div style={props.style}>
        {data && (
          <S.Cell>
            <S.Image src={data.imageUrl}></S.Image>
            <Font text={data.text} />
          </S.Cell>
        )}
      </div>
    );
  };

  return (
    <S.StyledPrint>
      <S.Header>Click on your image</S.Header>
      <S.GridArea>
        <Grid columnCount={colCount} columnWidth={width} height={windowHeight - 100} rowCount={rowCount} rowHeight={height} width={colCount * width}>
          {Cell}
        </Grid>
      </S.GridArea>
    </S.StyledPrint>
  );
}
export default Print;
