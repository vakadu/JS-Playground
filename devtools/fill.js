function customFill(array, value, start = 0, end = array.length) {
  // Convert start and end to integers
  start = Math.floor(start);
  end = Math.floor(end);

  // Handle negative indices
  if (start < 0) {
    start = Math.max(array.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(array.length + end, 0);
  }

  // Fill array with value
  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}
