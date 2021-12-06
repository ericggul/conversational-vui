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
    <S.StyledVoiceInput1>
      {initRecording && (
        <S.Time1>
          {formatMinutes(recordingMinutes)}
          {formatSeconds(recordingSeconds)}
        </S.Time1>
      )}

      <S.Recorder1>
        {initRecording ? (
          <S.Button1 onClick={saveRecording} recording={initRecording}>
            Stop
          </S.Button1>
        ) : (
          <S.Button1 onClick={startRecording} recording={initRecording}>
            Start
          </S.Button1>
        )}
      </S.Recorder1>
    </S.StyledVoiceInput1>
  );
}
export default VoiceInput;

VoiceInput.propTypes = {};
