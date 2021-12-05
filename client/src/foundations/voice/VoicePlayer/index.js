import React, { useState, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Howl } from "howler";
import { formatTime } from "@U/functions/format-time";

function VoicePlayer({ voiceIdx, msg, commandPauseVoice, onVoiceClick }) {
  const [voicePlaying, setVoicePlaying] = useState(false);
  const [playingSound, setPlayingSound] = useState(null);
  const [soundId, setSoundId] = useState(null);

  const [seekPos, setSeekPos] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  //Initialize Sound
  useEffect(() => {
    console.log("initialize");
    const currentSound = new Howl({
      src: [msg.blob],
      format: ["mp3"],
      mute: false,
      usingWebAudio: false,
      webAudio: false,
      preload: "metadata",
    });
    setPlayingSound(currentSound);

    const audio = new Audio(msg.blob);

    audio.addEventListener("loadedmetadata", async () => {
      while (audio.duration === Infinity) {
        await new Promise((r) => setTimeout(r, 1000));
        audio.currentTime = 100000000 * Math.random();
      }
      setAudioDuration(audio.duration);
    });
  }, []);

  useEffect(() => {
    console.log(playingSound);
    if (playingSound) {
      const dur = playingSound._duration;
      console.log(dur);

      setAudioDuration(dur);
    }
  }, [playingSound]);

  const voicePlayer = useCallback(() => {
    if (!voicePlaying && !seekPos) {
      setVoicePlaying(true);
      const id = playingSound.play();
      setSoundId(id);
      onVoiceClick(voiceIdx);
    } else if (!voicePlaying && seekPos) {
      setVoicePlaying(true);
      playingSound.play(soundId);
      playingSound.seek(seekPos, soundId);
      onVoiceClick(voiceIdx);
    } else {
      //Usually Pausing Action
      pauseVoice();
    }
  }, [playingSound, soundId, seekPos, voicePlaying]);

  const pauseVoice = useCallback(() => {
    playingSound.pause(soundId);
    setSeekPos(playingSound.seek(soundId));
    setVoicePlaying(false);
  }, [playingSound, soundId, seekPos, voicePlaying]);

  useEffect(() => {
    if (playingSound && voicePlaying) {
      playingSound.on("end", () => {
        setVoicePlaying(false);
        setSoundId(null);
        setSeekPos(0);
      });

      let updater;
      updater = requestAnimationFrame(function updateTime() {
        console.log("update!");
        setSeekPos(playingSound.seek(soundId));
        updater = requestAnimationFrame(updateTime);
      });
      return () => cancelAnimationFrame(updater);
    }
  }, [playingSound, voicePlaying, soundId]);

  useEffect(() => {
    if (commandPauseVoice && voicePlaying) {
      pauseVoice();
    }
  }, [commandPauseVoice, voicePlaying]);

  return (
    <S.VoiceElement onClick={voicePlayer} playing={voicePlaying}>
      <S.ProgressBar>
        {audioDuration !== 0
          ? `${formatTime(seekPos.toFixed(0))}/${formatTime(
              audioDuration.toFixed(0)
            )}`
          : "loading..."}
      </S.ProgressBar>
    </S.VoiceElement>
  );
}
export default VoicePlayer;

VoicePlayer.propTypes = {};
