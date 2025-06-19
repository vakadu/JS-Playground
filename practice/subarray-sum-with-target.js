function subArray(arr, target) {
    console.log(arr, target);
    let min = Number.MAX_SAFE_INTEGER, sum = 0, i=0, j=0, end = arr.length-1;
    while(j<end) {
        sum += arr[j];

        if(sum === target) {
            min = Math.min(min, j-i+1);
            j++;
        } else if(sum > target) {
            sum -= arr[i];
            i++;
            while(sum === target) {
                 min = Math.min(min, j-i+1);
            }
                        j++;
        } else {
            j++;
        }
    }
    console.log(min);
    
   return min;
}

const arr = [2, 1, 5, 2, 3, 2];
const target = 7;

subArray(arr, target)
