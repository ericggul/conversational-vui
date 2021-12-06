import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";
import { Howl } from "howler";

import Mickey from "@I/mickey.png";
import Minnie from "@I/minnie.png";
import * as S1 from "@F/voice/voice-player/interfaces/Interface1/styles";

function VoicePlayer({
  voiceIdx,
  msg,
  commandPauseVoice,
  commandStartVoice,
  onVoiceClick,
  onVoiceEnd,
}) {
  const [voicePlaying, setVoicePlaying] = useState(false);
  const [playingSound, setPlayingSound] = useState(null);
  const [soundId, setSoundId] = useState(null);

  const [played, setPlayed] = useState(false);
  const [seekPos, setSeekPos] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const voicePlayingRef = useRef(voicePlaying);

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
    if (playingSound) {
      const dur = playingSound._duration;
      console.log(dur);
      setAudioDuration(dur);
    }
  }, [playingSound]);

  const pauseVoice = useCallback(() => {
    console.log("pause voice!");
    setVoicePlaying(false);
    cancelAnimationFrame(voicePlayingRef.current);
    playingSound.pause(soundId);
    setSeekPos(playingSound.seek(soundId));
  }, [playingSound, soundId]);

  const voicePlayer = useCallback(() => {
    if (!voicePlaying && !soundId) {
      setPlayed(false);
      setVoicePlaying(true);
      const id = playingSound.play();
      setSoundId(id);
      setSeekPos(0);
      onVoiceClick(voiceIdx);
      console.log("new start!");
    } else if (!voicePlaying && soundId) {
      setVoicePlaying(true);
      playingSound.play(soundId);
      playingSound.seek(seekPos, soundId);
      onVoiceClick(voiceIdx);
    } else {
      pauseVoice();
    }
  }, [
    playingSound,
    soundId,
    seekPos,
    voicePlaying,
    onVoiceClick,
    pauseVoice,
    voiceIdx,
  ]);

  useEffect(() => {
    if (commandStartVoice) {
      voicePlayer();
    }
  }, [commandStartVoice]);

  useEffect(() => {
    if (playingSound && voicePlaying) {
      console.log("82", voicePlaying);
      playingSound.on("end", () => {
        console.log("why here is fired?");
        setVoicePlaying(false);
        setPlayed(true);
        setSoundId(null);
        onVoiceEnd();
        setSeekPos(0);
      });
    }

    if (voicePlaying && playingSound) {
      const updateTime = () => {
        console.log(voicePlaying, soundId);

        if (soundId) {
          setSeekPos(playingSound.seek(soundId));
        }
        voicePlayingRef.current = requestAnimationFrame(updateTime);
      };
      updateTime();
      return () => cancelAnimationFrame(voicePlayingRef.current);
    }
  }, [playingSound, voicePlaying, soundId]);

  useEffect(() => {
    if (commandPauseVoice && voicePlaying) {
      pauseVoice();
    }
  }, [commandPauseVoice, pauseVoice, voicePlaying]);

  const leftAlign = useMemo(() => msg.userName !== "Me", [msg.userName]);

  return (
    <S1.VoiceElement1 onClick={voicePlayer} leftAlign={leftAlign}>
      <S1.Profile1
        leftAlign={leftAlign}
        src={msg.userName === "Me" ? Mickey : Minnie}
      />
      <S1.Bar1 leftAlign={leftAlign}>
        <S1.BarText1 leftAlign={leftAlign}>
          {`${Math.floor(audioDuration)}s`}
        </S1.BarText1>
        <S1.Progress1
          leftAlign={leftAlign}
          audioDuration={audioDuration}
          seekPos={!voicePlaying && played ? audioDuration : seekPos}
        />
      </S1.Bar1>
    </S1.VoiceElement1>
  );
}
export default VoicePlayer;

VoicePlayer.propTypes = {};
