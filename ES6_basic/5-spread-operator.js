export default function concatArrays(array1, array2, string) {
  let arrays = [];
  arrays = [...array1, ...array2, ...string];
  return arrays;
}
