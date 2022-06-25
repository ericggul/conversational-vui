const getRandom = (a, b) => Math.random() * (b - a) + a;

export function filterGenerator() {
  let returnString = "";
  const randomness = 0.5;

  if (Math.random() < randomness * 0.5) {
    returnString += `blur(${getRandom(1, 5)}px)`;
  }

  if (Math.random() < randomness) {
    returnString += `contrast(${getRandom(1.5, 3)})`;
  }
  returnString += `hue-rotate(${getRandom(0, 360)}deg)`;

  returnString += `saturate(${getRandom(1.5, 3)})`;

  return returnString;
}
