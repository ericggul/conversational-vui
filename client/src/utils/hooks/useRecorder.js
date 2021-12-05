import { useState, useEffect } from "react";
import { startRecording, saveRecording } from "@U/handlers/recorder-controls";
import { getAverageVolume } from "@U/functions/average-volume";

const initialState = {
  recordingMinutes: 0,
  recordingSeconds: 0,
  initRecording: false,
  mediaRecorder: null,
  analyserData: null,
  audio: null,
};

export default function useRecorder(handleNewAudio) {
  const [recorderState, setRecorderState] = useState(initialState);

  //Time Adjuster
  useEffect(() => {
    const MAX_RECORDER_TIME = 5;
    let recordingInterval = null;

    if (recorderState.initRecording) {
      recordingInterval = setInterval(() => {
        setRecorderState((prevState) => {
          if (
            prevState.recordingMinutes === MAX_RECORDER_TIME &&
            prevState.recordingSeconds === 0
          ) {
            clearInterval(recordingInterval);
            return prevState;
          }

          if (
            prevState.recordingSeconds >= 0 &&
            prevState.recordingSeconds < 59
          ) {
            return {
              ...prevState,
              recordingSeconds: prevState.recordingSeconds + 1,
            };
          }
          if (prevState.recordingSeconds === 59) {
            return {
              ...prevState,
              recordingMinutes: prevState.recordingMinutes + 1,
              recordingSeconds: 0,
            };
          }
        });
      }, 1000);
    } else clearInterval(recordingInterval);

    return () => clearInterval(recordingInterval);
  });

  //Activate recorder
  useEffect(() => {
    if (recorderState.mediaStream) {
      var AudioContext = window.AudioContext || window.webkitAudioContext;

      let ac = new AudioContext();
      let source = ac.createMediaStreamSource(recorderState.mediaStream);
      let dest = ac.createMediaStreamDestination();
      let analyser = ac.createAnalyser();

      let mediaRecorder = new MediaRecorder(dest.stream);

      source.connect(analyser);
      analyser.connect(dest);

      //Visualizaer setup
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.3;

      let data = new Uint8Array(analyser.frequencyBitCount);

      setRecorderState((prevState) => {
        return {
          ...prevState,
          mediaRecorder: mediaRecorder,
          analyserData: data,
          // mediaRecorder: new MediaRecorder(prevState.mediaStream),
        };
      });
    }
  }, [recorderState.mediaStream]);

  useEffect(() => {
    const recorder = recorderState.mediaRecorder;
    let chunks = [];

    if (recorder && recorder.state === "inactive") {
      recorder.start();
      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/mp3; codecs=opus" });
        chunks = [];

        setRecorderState((prevState) => {
          if (prevState.mediaRecorder) {
            return {
              ...initialState,
              audio: window.URL.createObjectURL(blob),
            };
          } else {
            return initialState;
          }
        });
      };
    }

    return () => {
      if (recorder)
        recorder.stream.getAudioTracks().forEach((track) => track.stop());
    };
  }, [recorderState.mediaRecorder]);

  //Saved Audio Handling
  useEffect(() => {
    handleNewAudio(recorderState.audio);
  }, [recorderState.audio]);

  //Audio Visualization
  // useEffect(() => {
  //   let animate;
  //   animate = requestAnimationFrame(function volumeCalc() {
  //     const data = recorderState.analyserData;
  //     const averageVolume = getAverageVolume(data);
  //     console.log("analyserData", recorderState.analyserData, averageVolume);
  //     animate = requestAnimationFrame(volumeCalc);
  //   });
  //   return () => cancelAnimationFrame(animate);
  // }, [recorderState.analyserData]);

  return {
    recorderState,
    startRecording: () => startRecording(setRecorderState),
    cancelRecording: () => setRecorderState(initialState),
    saveRecording: () => saveRecording(recorderState.mediaRecorder),
  };
}
