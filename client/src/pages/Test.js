import AAmp3 from "@/static/audio/AA.mp3";
import { Howl } from "howler";

function Test() {
  const fireAudio = () => {
    const currentSound = new Howl({
      src: [AAmp3],
      format: ["mp3"],
      volume: 1,
      preload: "metadata",
      html5: true,
      usingWebAudio: false,
      webAudio: false,
    });
    currentSound.play();
  };
  return <div onClick={fireAudio}>Click</div>;
}

export default Test;
