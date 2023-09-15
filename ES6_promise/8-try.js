export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    return new Error('Division by zero');
  } else {
    return (numerator / denominator);
  }
}