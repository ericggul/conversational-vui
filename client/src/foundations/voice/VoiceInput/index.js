import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as S1 from "@F/voice/VoiceInput/interfaces/Interface1/styles";
import * as S2 from "@F/voice/VoiceInput/interfaces/Interface2/styles";
import useRecorder from "@U/hooks/useRecorder";
import { formatMinutes, formatSeconds } from "@U/functions/format-time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Player } from "tone";

function VoiceInput({ interfaceVersion, handleNewAudio }) {
  const { recorderState, startRecording, cancelRecording, saveRecording } =
    useRecorder(handleNewAudio);
  const { recordingMinutes, recordingSeconds, initRecording, audio } =
    recorderState;

  return (
    <>
      {interfaceVersion === 1 ? (
        <S1.StyledVoiceInput1>
          {initRecording && (
            <S1.Delete1 onClick={cancelRecording}>
              <FontAwesomeIcon icon={faTrash} />
              <S1.DeleteText>delete</S1.DeleteText>
            </S1.Delete1>
          )}
          {initRecording ? (
            <S1.Button1 onClick={saveRecording} recording={initRecording}>
              Send
            </S1.Button1>
          ) : (
            <S1.Button1 onClick={startRecording} recording={initRecording}>
              Start
            </S1.Button1>
          )}
          {initRecording && (
            <S1.Time1>
              {`${formatMinutes(recordingMinutes)}:${formatSeconds(
                recordingSeconds
              )}`}
            </S1.Time1>
          )}
        </S1.StyledVoiceInput1>
      ) : (
        <S2.StyledVoiceInput1>
          {initRecording && (
            <S2.Delete1 onClick={cancelRecording}>
              <FontAwesomeIcon icon={faTrash} />
            </S2.Delete1>
          )}
          {initRecording ? (
            <S2.Button1 onClick={saveRecording} recording={initRecording}>
              {" "}
              {`${formatMinutes(recordingMinutes)}:${formatSeconds(
                recordingSeconds
              )}`}
            </S2.Button1>
          ) : (
            <S2.Button1
              onClick={startRecording}
              recording={initRecording}
            ></S2.Button1>
          )}
        </S2.StyledVoiceInput1>
      )}
    </>
  );
}
export default VoiceInput;

VoiceInput.propTypes = {};
