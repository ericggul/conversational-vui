import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import useRecorder from "@U/hooks/useRecorder";
import { formatMinutes, formatSeconds } from "@U/functions/format-time";
import { Player } from "tone";

function VoiceInput({ handleNewAudio }) {
  const { recorderState, startRecording, cancelRecording, saveRecording } =
    useRecorder(handleNewAudio);
  const { recordingMinutes, recordingSeconds, initRecording, audio } =
    recorderState;

  return (
    <S.StyledVoiceInput>
      <S.Time>
        {formatMinutes(recordingMinutes)}
        {formatSeconds(recordingSeconds)}
      </S.Time>
      <S.Recorder>
        {initRecording ? (
          <S.Button onClick={saveRecording}>Stop</S.Button>
        ) : (
          <S.Button onClick={startRecording}>Start</S.Button>
        )}
      </S.Recorder>
    </S.StyledVoiceInput>
  );
}
export default VoiceInput;

VoiceInput.propTypes = {};
