export default function cleanSet(set, startString) {
  const array = [...set];
  const filteredArray = array.filter((item) => item.startsWith(startString));
  const result = filteredArray.map(item => item.slice(startString.length)).join('-');
  return result;
}
