import Contents from "./Contents";
import Intro from "./Intro";
import Instructions from "./Instructions";
import { useState } from "react";
import * as S from "./styles";

export default function AnEcho() {
  const [current, setCurrent] = useState("contents");

  return (
    <S.Whole current={current}>
      <Contents current={current} />
      {current === "intro" && <Intro handleToContents={() => setCurrent("contents")} />}
      {current === "instructions" && <Instructions handleToIntro={() => setCurrent("intro")} />}
    </S.Whole>
  );
}
