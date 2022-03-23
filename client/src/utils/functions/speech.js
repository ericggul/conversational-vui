export const speak = (text) => {
  let synth = window.speechSynthesis;
  var voices = window.speechSynthesis.getVoices();

  let utterance = new SpeechSynthesisUtterance(text);

  utterance.pitch = 1;
  utterance.speed = 1;
  utterance.pitch = 0.8;
  synth.speak(utterance);
};
