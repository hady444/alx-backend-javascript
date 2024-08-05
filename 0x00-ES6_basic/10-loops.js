export default function appendToEachArrayValue(array, appendString) {
  const newArr = array;
  for (const x of array) {
  const idx = array.indexOf(x);
  newArr[idx] = appendString + x;
  }

  return newArr;
}
