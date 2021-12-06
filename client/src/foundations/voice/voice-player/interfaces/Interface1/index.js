import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { formatTime } from "@U/functions/format-time";
import Mickey from "@I/mickey.png";
import Minnie from "@I/minnie.png";
import * as S from "./styles";

function Interface1({
  voicePlayer,
  voicePlaying,
  audioDuration,
  seekPos,
  msg,
}) {
  console.log(seekPos);

  const leftAlign = useMemo(() => msg.userName === "Me", [msg.userName]);

  return (
    <S.VoiceElement1 onClick={voicePlayer} leftAlign={leftAlign}>
      <S.Profile1
        leftAlign={leftAlign}
        src={msg.userName === "Me" ? Minnie : Mickey}
      />
      <S.Bar1 leftAlign={leftAlign}>
        <S.BarText1 leftAlign={leftAlign}>
          {`${audioDuration.toFixed(0)}s`}
        </S.BarText1>
        <S.Progress1
          leftAlign={leftAlign}
          audioDuration={audioDuration}
          seekPos={seekPos}
        >
          <S.ProgressText1
            leftAlign={leftAlign}
            seekPos={seekPos}
          >{`${seekPos.toFixed(0)}s`}</S.ProgressText1>
        </S.Progress1>
      </S.Bar1>
    </S.VoiceElement1>
  );
}
export default Interface1;

Interface1.propTypes = {};
