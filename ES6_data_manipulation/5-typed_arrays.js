export default function createInt8TypedArray(length, position, value) {
  // check if position is outside the range //
  if (position > length) {
    throw new Error('Position outside range');
  }
  // create a new ArrayBuffer with the length //
  const buffer = new ArrayBuffer(length);
  // create a new DataView of the ArrayBuffer //
  const dataView = new DataView(buffer);
  // set the value at the position //
  dataView.setInt8(position, value);
  // return the DataView //
  return dataView;
  // chef's kiss //
}
