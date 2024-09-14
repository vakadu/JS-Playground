//selection sort
//first step: get minimum element fromm the array, now swap the minimum elem to the first
//and first elem to the minumum position.
//now first elem is sorted, now continue this till the last

//why arr.length-1 for i
//12 16 14 1 2 3
//1 16 14 12 2 3
//1 2 14 12 16 3
//1 2 3 12 16 14
//1 2 3 12 16 14
//1 2 3 12 14 16

//last elem will be sorted by this logic so we dont need to till last

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }
    [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
  }
  return arr;
}

console.log(selectionSort([12, 16, 14, 1, 2, 3]));
console.log(selectionSort([9, 3, 6, 2, 1, 11]));

console.log("=============SELECTION SORT============================");

//bubble sort
//push max elem to the last using adjacent swaps
//12 16 14 1 2 3
//12 16 14 1 2 3
//12 14 16 1 2 3
//12 14 1 16 2 3
//12 14 1 2 16 3
//12 14 1 2 3 16
//we get the max elem in the last by adjacent swaps by checking curr elem is greater
// than my prev then dont swap else swap

//like this we continue again

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([12, 16, 14, 1, 2, 3]));
console.log(bubbleSort([9, 3, 6, 2, 1, 11]));

console.log("=============BUBBLE SORT============================");

//insertion sort
//puts the elem to the correct position
//strats with an elem and see is in the correct position
//12 16 14 1 2 3
//is 12 at the correct poition for length 1 --> yes

//12 16 14 1 2 3
//is 16 at the correct poition for length 2 --> yes

//12 16 14 1 2 3
//is 14 at the correct poition for length 3 --> no
//so we swap 16 and 14, then is 14 and 12 not swapable we leave there

//12 14 16 1 2 3

//12 14 16 1 2 3
//is 1 at the correct poition for length 4 --> no
//12 14 1 16 2 3
//12 1 14 16 2 3
//1 12 14 16 2 3
//this becomes the correct position after 1 swappaing away

//1 12 14 16 2 3
//is 2 at the correct poition for length 5 --> no
//1 12 14 16 2 3
//1 12 14 2 16 3
//1 12 2 14 16 3
//1 2 12 14 16 3

//1 2 12 14 16 3
//is 3 at the correct poition for length 6 --> no
//1 2 12 14 3 16
//1 2 12 3 14 16
//1 2 3 12 14 16

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
    // let curr = arr[i];
    // let j = i - 1;
    // while (j >= 0 && arr[j] > curr) {
    //   arr[j + 1] = arr[j];
    //   j--;
    // }
    // arr[j + 1] = curr;
  }
  return arr;
}

console.log(insertionSort([12, 16, 14, 1, 2, 3]));
console.log(insertionSort([9, 3, 6, 2, 1, 11]));

console.log("=============INSERTION SORT============================");

//merge sort
//divide and merge
//divide the array into two halves, and keep on doing it till we reach to a single elem.
//after we can do divide the elem anymore then we start merging them and sort.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;

  console.log(result);
}

console.log(mergeSort([12, 16, 14, 1, 2, 3]));
// console.log(mergeSort([9, 3, 6, 2, 1, 11]));

console.log("=============MERGE SORT============================");
