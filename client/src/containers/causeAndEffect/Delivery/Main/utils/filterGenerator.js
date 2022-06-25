const getRandom = (a, b) => Math.random() * (b - a) + a;

export function filterGenerator() {
  let returnString = "";
  const randomness = 0.25;
  if (Math.random() < randomness) {
    returnString += `blur(${getRandom(1, 5)}px)`;
  }
  if (Math.random() < randomness) {
    returnString += `invert(${getRandom(50, 100)}%)`;
  }
  if (Math.random() < randomness) {
    returnString += `grayscale(${getRandom(50, 100)}%)`;
  }
  if (Math.random() < randomness) {
    returnString += `hue-rotate(${getRandom(100, 360)}deg)`;
  }
  if (Math.random() < randomness) {
    returnString += `brightness(${getRandom(50, 200)}%)`;
  }

  if (Math.random() < randomness) {
    returnString += `sepia(${getRandom(50, 100)}%)`;
  }

  return returnString;
}
