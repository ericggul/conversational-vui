export function formatMinutes(minutes) {
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

export function formatCurrentDateTime() {
  const date = new Date();
  return date.getHours() > 12
    ? `${date.getHours() - 12}:${formatSeconds(date.getMinutes())}PM`
    : `${date.getHours()}:${formatSeconds(date.getMinutes())}AM`;
}
