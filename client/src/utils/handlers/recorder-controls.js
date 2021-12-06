export async function startRecording(setRecorderState) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    setRecorderState((prevState) => {
      return {
        ...prevState,
        initRecording: true,
        mediaStream: stream,
      };
    });
  } catch (err) {
    console.log(err);
  }
}

export function saveRecording(recorder, stream) {
  console.log("SAVED");
  console.log(recorder.state);
  if (recorder.state !== "inactive") recorder.stop();
  stream.getTracks().forEach((track) => track.stop());
  console.log(recorder.state);
}
