import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Howl } from "howler";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import Mickey from "@I/mickey.png";
import Minnie from "@I/minnie.png";
import * as S1 from "@/foundations/chat/voice-player/interfaces/Interface1/styles";
import * as S2 from "@/foundations/chat/voice-player/interfaces/Interface2/styles";

function VoicePlayer({ interfaceVersion, voiceIdx, msg, commandPauseVoice, commandStartVoice, onVoiceClick, onVoiceEnd, audioConfirmed = null, marginTop = 0 }) {
  const [voicePlaying, setVoicePlaying] = useState(false);
  const [playingSound, setPlayingSound] = useState(null);
  const [soundId, setSoundId] = useState(null);

  const [played, setPlayed] = useState(false);
  const [seekPos, setSeekPos] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const voicePlayingRef = useRef(voicePlaying);

  //Voice Status for UI
  const [statusIcon, setStatusIcon] = useState(0);
  useEffect(() => {
    if (voicePlaying) {
      console.log("status to 1");
      setStatusIcon(1);
      setTimeout(() => setStatusIcon(0), 500);
    }
  }, [voicePlaying]);

  //Initialize Sound
  useEffect(() => {
    const currentSound = new Howl({
      src: [msg.blob],
      format: ["mpeg"],
      mute: false,
      volume: 1,
      html5: true,
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
      if (interfaceVersion === 2) {
        audioConfirmed(audio.duration);
      }
    });
  }, [interfaceVersion]);

  //pausing voice
  const pauseVoice = useCallback(() => {
    setVoicePlaying(false);
    cancelAnimationFrame(voicePlayingRef.current);
    playingSound.pause(soundId);
    setSeekPos(playingSound.seek(soundId));

    //UI
    setStatusIcon(-1);
    setTimeout(() => setStatusIcon(0), 500);
  }, [playingSound, soundId]);

  const voicePlayer = useCallback(() => {
    if (!voicePlaying && !soundId) {
      setPlayed(false);
      setVoicePlaying(true);
      const id = playingSound.play();
      setSoundId(id);
      setSeekPos(0);
      onVoiceClick(voiceIdx);
    } else if (!voicePlaying && soundId) {
      setVoicePlaying(true);
      playingSound.play(soundId);
      playingSound.seek(seekPos, soundId);
      onVoiceClick(voiceIdx);
    } else {
      pauseVoice();
    }
  }, [playingSound, soundId, seekPos, voicePlaying, onVoiceClick, pauseVoice, voiceIdx]);

  useEffect(() => {
    if (commandStartVoice) {
      voicePlayer();
    }
  }, [commandStartVoice]);

  useEffect(() => {
    if (playingSound && voicePlaying) {
      playingSound.on("end", () => {
        setVoicePlaying(false);
        setPlayed(true);
        setSoundId(null);
        onVoiceEnd();
        setSeekPos(0);
      });
    }

    if (voicePlaying && playingSound) {
      const updateTime = () => {
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
  const interface2Width = useMemo(() => (audioDuration !== 0 ? Math.min(audioDuration ** 0.6, 5) : 3), [audioDuration]);

  const margin2Width = useMemo(() => (audioDuration !== 0 ? Math.min(marginTop ** 0.6, 5) : 0), [marginTop, audioDuration]);

  return (
    <>
      {interfaceVersion === 1 ? (
        <S1.VoiceElement1 onClick={voicePlayer} leftAlign={leftAlign}>
          <S1.Profile1 leftAlign={leftAlign} src={msg.userName === "Me" ? Mickey : Minnie} />
          <S1.Bar1 leftAlign={leftAlign}>
            <S1.BarText1 leftAlign={leftAlign}>{`${Math.floor(audioDuration)}s`}</S1.BarText1>
            <S1.Progress1 leftAlign={leftAlign} audioDuration={audioDuration} seekPos={!voicePlaying && played ? audioDuration : seekPos} />
          </S1.Bar1>
        </S1.VoiceElement1>
      ) : (
        <S2.VoiceElement1 onClick={voicePlayer} leftAlign={leftAlign} width={interface2Width} marginTop={margin2Width}>
          <S2.ProgressWrapper>
            {audioDuration !== 0 && (
              <S2.ProgressSvg>
                <S2.ProgressCircle width={interface2Width} audioDuration={audioDuration} seekPos={!voicePlaying && played ? audioDuration : seekPos} leftAlign={leftAlign} />
              </S2.ProgressSvg>
            )}
          </S2.ProgressWrapper>

          {audioDuration !== 0 ? (
            <S2.Profile1 width={interface2Width}>
              {statusIcon !== 0 && (
                <S2.StatusIconWrapper>
                  <FontAwesomeIcon icon={statusIcon === 1 ? faPlay : faPause} />
                </S2.StatusIconWrapper>
              )}
            </S2.Profile1>
          ) : (
            <S2.Loading>Loading...</S2.Loading>
          )}
          {audioDuration !== 0 && <S2.DurationText leftAlign={leftAlign}>{`${Math.floor(audioDuration)}s`}</S2.DurationText>}
        </S2.VoiceElement1>
      )}
    </>
  );
}
export default VoicePlayer;

VoicePlayer.propTypes = {};
