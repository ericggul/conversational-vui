import React, { useEffect, useState, useMemo } from "react";
import * as S from "./styles";
import { FixedSizeGrid as Grid } from "react-window";
import { io } from "socket.io-client";

//utils
import useResize from "@U/hooks/useResize";
import retriveData from "./utils/retriveData";

//Modal
import Modal from "./Modal";

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

const ImageEl = ({ url }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [url]);

  return (
    <S.ImageContainer>
      <p imageLoaded={imageLoaded}> Image Loading...</p>
      <S.Image src={url} imageLoaded={imageLoaded} />
    </S.ImageContainer>
  );
};

function Print() {
  useEffect(() => {
    console.log(`Subscription is situated at the last section of Causality.`);
    console.log(`Within various web contents, including Youtube Videos and Blog Posts, we can easily witness a button or ment asking for subscription.`);
    console.log(`Same for this artwork: It asks for the user's subscription to the artist's mailing list, in order to receive their artwork into their email.`);
    console.log(
      `This is not only an analogy between web spaces and exhibition spaces, but also argues that an act of subscription, an act of receiving information from a web activist who aims to bring a real value, is part of an 'active interaction' which this artwork is a part of.`
    );
  }, []);

  const [imageData, setImageData] = useState([]);
  const socket = useMemo(() => io({ transports: ["websocket"] }), []);

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
  const width = useMemo(() => windowWidth * 0.3, [windowWidth]);
  const height = useMemo(() => windowHeight * 0.3 + 80, [windowHeight]);
  const colCount = useMemo(() => Math.floor(windowWidth / width), [windowWidth, width]);
  const rowCount = useMemo(() => Math.ceil(imageData.length / Math.floor(windowWidth / width)), [imageData, windowWidth, windowHeight, width]);

  const Cell = (props) => {
    const idx = useMemo(() => props.columnIndex + props.rowIndex * colCount, [props, colCount]);
    const data = useMemo(() => imageData[idx], [idx, imageData]);

    return (
      <div style={props.style} onClick={() => handleImageClick(data)}>
        {data && (
          <S.Cell>
            <ImageEl url={data.imageUrl} />
            <Font text={data.text} />
          </S.Cell>
        )}
      </div>
    );
  };

  const [modalOpened, setModalOpened] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleImageClick = (data) => {
    setModalData(data);
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
    setModalData({});
  };

  return (
    <S.StyledPrint>
      <S.Header>SELECT your IMAGE</S.Header>
      <S.GridArea>
        <Grid columnCount={colCount} columnWidth={width} height={windowHeight - 100} rowCount={rowCount} rowHeight={height} width={colCount * width}>
          {Cell}
        </Grid>
      </S.GridArea>
      <Modal modalData={modalData} modalOpened={modalOpened} handleModalClose={handleModalClose} />
    </S.StyledPrint>
  );
}
export default Print;
