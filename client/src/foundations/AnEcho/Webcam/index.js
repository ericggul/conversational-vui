import React, { useRef, useState, useEffect } from "react";
import * as S from "./styles";

function Webcam({ tossData }) {
  //prepare video
  const containerRef = useRef(null);
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

  useEffect(() => {
    if (videoReady) {
      takePicture();
    }
  }, [videoReady]);

  //take picture
  function takePicture() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.style.left = canvas.width = 100;
    canvas.height = 75;
    context.drawImage(videoRef.current, 0, 0, 100, 75);
    canvas.style.left = "300px";

    const data = canvas.toDataURL("image/png");
    tossData(data);

    let tracks = videoRef.current.srcObject.getTracks();
    console.log(tracks);

    tracks.forEach((track) => track.stop());
    videoRef.current.remove();
  }

  return (
    <S.StyledWebcam ref={containerRef}>
      <S.Video ref={videoRef} />
    </S.StyledWebcam>
  );
}
export default Webcam;
