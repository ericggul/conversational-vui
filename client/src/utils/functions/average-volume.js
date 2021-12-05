export const getAverageVolume = (array) => {
  if (array) {
    let amplitudeSum = 0;
    for (let i = 0; i < array.length; i++) {
      amplitudeSum += array[i];
    }
    return amplitudeSum / array.length;
  }
};
