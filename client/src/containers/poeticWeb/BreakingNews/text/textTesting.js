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

  console.log(sliceLocs);
  console.log(permutation);
  //parse based on slicelocs
  let resultString = "";
  for (let i = slicedNumber - 1; i >= 0; i--) {
    console.log(resultString);
    resultString += splittedText.slice(sliceLocs[permutation[i]], sliceLocs[permutation[i + 1] >= slicedNumber ? sliceLocs.length : permutation[i + 1]]).join(" ") + " ";
  }
  resultString += splittedText.slice(0, sliceLocs[0]).join(" ");

  return resultString;
};

export const replaceCharacter = (text, replaceNumber) => {
  let replacedNumber = replaceNumber;
  if (replaceNumber > text.length - 1) {
    replacedNumber = text.length - 1;
  }
};

export const test = () => {
  console.log(switchWord(SAMPLE_TEXT, 1));
};
