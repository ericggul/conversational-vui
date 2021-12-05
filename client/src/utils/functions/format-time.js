export function formatMinutes(minutes) {
  if (minutes === 0) {
    return "";
  }
  return minutes < 10 ? `0${minutes}` : minutes;
}

export function formatSeconds(seconds) {
  return seconds < 10 ? `0${seconds}` : seconds;
}

export function formatTime(seconds) {
  return seconds > 60
    ? `${formatSeconds(seconds / 60)}:${formatSeconds(seconds % 60)}`
    : `${formatSeconds(seconds)}`;
}
