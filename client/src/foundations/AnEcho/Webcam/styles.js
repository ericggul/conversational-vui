import styled from "styled-components";

export const StyledWebcam = styled.div`
  position: absolute;
  top: 970px;
  left: 800px;
  width: 100%;
  height: 75px;

  canvas {
    position: absolute;
    width: 100px;
    height: 75px;
  }
`;

export const Video = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 75px;
  z-index: -1;
  opacity: 0;
`;

// export const VideoCoverCanvas = styled.canvas`

// `
