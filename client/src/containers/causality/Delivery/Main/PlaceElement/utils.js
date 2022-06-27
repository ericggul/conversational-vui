export const distortLetter = (original, finalOutput, numbersToReplace) => {
  if (original.length !== finalOutput.length) {
    return original;
  }
  const lengthToReplace = Math.min(Math.floor(numbersToReplace), original.length);
  let output = "";
  for (let i = 0; i < original.length - lengthToReplace; i++) {
    output += original[i];
  }
  for (let i = 0; i < lengthToReplace; i++) {
    output += finalOutput[i + original.length - lengthToReplace];
  }
  return output;
};
