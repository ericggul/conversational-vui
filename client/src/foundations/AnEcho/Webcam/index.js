import React, { useRef, useState, useEffect } from "react";
import * as S from "./styles";

function Webcam() {
  //prepare video
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (videoRef && videoRef.current && !videoReady) {
      prepareVideo();
    }
  }, [videoReady, videoRef]);

  async function prepareVideo() {
    if (videoRef.current === null) return;

    const video = videoRef.current;
    video.width = 100;
    video.height = 100;

    const videoConfig = {
      audio: false,
      video: {
        facingMode: "user",
      },
    };

    const stream = await navigator.mediaDevices.getUserMedia(videoConfig);

    video.srcObject = stream;

    await new Promise((resolve) => {
      video.onloadedmetadata = () => {
        resolve(video);
      };
    });

    video.play();
    video.addEventListener(
      "canplay",
      () => {
        video.play();
      },
      false
    );
    setVideoReady(true);
  }

  return (
    <S.StyledWebcam>
      <S.Video ref={videoRef} />
    </S.StyledWebcam>
  );
}
export default Webcam;
