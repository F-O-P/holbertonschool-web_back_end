export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = newArray[idx];
    const newArray = appendString + value;
  }

  return newArray;
}
