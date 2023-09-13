export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  const array = [...set];
  const filteredArray = array.filter((item) => item.startsWith(startString));
  const result = filteredArray.map(item => item.slice(startString.length)).join('-')
    .toString();
  return result;
}
