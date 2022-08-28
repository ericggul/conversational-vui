const SAMPLE_TEXT = "The attack in Irpin, west of the capital, suggested either direct targeting of evacuees or disregard for the risk of civilian casualties.";

export const switchWord = (text, sliceNumber) => {
  let splittedText = text.split(" ");
  let sliceLocs = [];

  let slicedNumber = sliceNumber;
  if (sliceNumber > splittedText.length - 1) {
    slicedNumber = splittedText.length - 1;
  }

  //generate slicelocs
  while (sliceLocs.length < slicedNumber) {
    let idx = Math.floor(Math.random() * splittedText.length);
    if (sliceLocs.indexOf(idx) === -1) {
      sliceLocs.push(idx);
    }
  }

  //sort sliceLocs
  sliceLocs.sort((a, b) => a - b);
  //random permutation of sliceLocs
  let permutation = Array.from(Array(slicedNumber).keys()).sort(() => Math.random() - 0.5);

  //parse based on slicelocs
  let resultString = "";
  for (let i = slicedNumber - 1; i >= 0; i--) {
    resultString += splittedText.slice(sliceLocs[permutation[i]], sliceLocs[permutation[i + 1] >= slicedNumber ? sliceLocs.length : permutation[i + 1]]).join(" ") + " ";
  }
  resultString += splittedText.slice(0, sliceLocs[0]).join(" ");

  return resultString;
};

//Random Characters
//Capital Letter:
//String.fromCharCode(65 + Math.floor(Math.random() * 26))
//Small Letter
//String.fromCharCode(97 + Math.floor(Math.random() * 26))

export const replaceCharacter = (text, replaceNumber, capitalLetterRatio = 0.1) => {
  let modifiedText = text;

  for (let i = 0; i < replaceNumber; i++) {
    const randomPos = Math.floor(Math.random() * text.length);

    const randomCharacter = Math.random() > capitalLetterRatio ? String.fromCharCode(97 + Math.floor(Math.random() * 26)) : String.fromCharCode(65 + Math.floor(Math.random() * 26));
    modifiedText = modifiedText.substr(0, randomPos) + randomCharacter + modifiedText.substr(randomPos + 1);
  }

  return modifiedText;
};

export const sillyReplace = (text) => {
  let newText = text;

  newText = newText.replaceAll("a", "&");
  newText = newText.replaceAll("b", "!");
  newText = newText.replaceAll("c", "*");
  newText = newText.replaceAll("d", "ㄷ");
  newText = newText.replaceAll("e", "ㅇ");
  newText = newText.replaceAll("s", "$");
  return newText;
};

export const sillyMoveCharCode = (text, randomness = 0.1, moveRange = 15, moveRandom = true) => {
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    if (!moveRandom) {
      if (Math.random() < randomness) {
        newText += String.fromCharCode(text.charCodeAt(i) + moveRange);
      } else {
        newText += text[i];
      }
    } else {
      if (Math.random() < randomness) {
        newText += String.fromCharCode(text.charCodeAt(i) + Math.floor(Math.random() * moveRange));
      } else {
        newText += text[i];
      }
    }
  }
  return newText;
};

export const totallyRandom = (text, capitalLetterRatio = 0.1, spaceRatio = 0.05) => {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    const randomCharacter = Math.random() > capitalLetterRatio ? String.fromCharCode(97 + Math.floor(Math.random() * 26)) : String.fromCharCode(65 + Math.floor(Math.random() * 26));
    newText += randomCharacter;
    if (Math.random() < spaceRatio) {
      newText += " ";
    } else if (Math.random() < 0.01) {
      newText += ",";
    } else if (Math.random() < 0.01) {
      newText += "?";
    }
  }
  newText += ".";
  return newText;
};

export const randomWithKeywords = () => {};

export const test = () => {
  // console.log(sillyMoveCharCode(SAMPLE_TEXT, 1, false));
};
