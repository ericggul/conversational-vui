import React, { useState, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Howl } from "howler";

function VoicePlayer({ idx, msg, onVoiceClick }) {
  const [voicePlaying, setVoicePlaying] = useState(false);
  const [playingSound, setPlayingSound] = useState(null);
  const [soundId, setSoundId] = useState(null);

  const [seekPos, setSeekPos] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  //Initialize Sound
  useEffect(() => {
    const currentSound = new Howl({
      src: [msg.blob],
      format: ["mp3"],
      mute: false,
    });
    setPlayingSound(currentSound);

    var audio = new Audio(msg.blob);

    const getDuration = (url, next) => {
      var player = new Audio(url);
      player.addEventListener(
        "durationchange",
        (e) => {
          if (player.duration == Infinity) {
            var duration = player.duration;
            player.remove();
            next(duration);
          }
        },
        false
      );
      player.load();
      player.currentTime = 24 * 60 * 60;
      player.volume = 0;
    };

    getDuration(msg.blob, (dur) => console.log(dur));
    // return () =>
    //   audio.removeEventListener("onloadmetadata", () =>
    //     setAudioDuration(audio.duration)
    //   );
  }, []);

  const voicePlayer = useCallback(() => {
    if (!voicePlaying && !seekPos) {
      setVoicePlaying(true);
      const id = playingSound.play();
      setSoundId(id);
    } else if (!voicePlaying && seekPos) {
      setVoicePlaying(true);
      playingSound.play(soundId);
      playingSound.seek(seekPos, soundId);
    } else {
      //Usually Pausing Action
      playingSound.pause(soundId);
      setSeekPos(playingSound.seek(soundId));
      setVoicePlaying(false);
    }
  }, [playingSound, soundId, seekPos, voicePlaying]);

  useEffect(() => {
    if (playingSound) {
      playingSound.on("end", () => {
        console.log("ended!");
        setVoicePlaying(false);
        setSoundId(null);
        setSeekPos(0);
      });
    }
  }, [playingSound]);

  return (
    <S.VoiceElement onClick={voicePlayer} playing={voicePlaying}>
      <S.ProgressBar>
        {playingSound
          ? `${seekPos.toFixed(1)}/${audioDuration.toFixed(1)}`
          : "loading..."}
      </S.ProgressBar>
    </S.VoiceElement>
  );
}
export default VoicePlayer;

VoicePlayer.propTypes = {};
