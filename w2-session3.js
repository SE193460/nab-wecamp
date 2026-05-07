const arr = [3, 9, 57, 89, 2, 71];
// 1. Find the largest number in the array
const max = Math.max(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
console.log("Largest number:", max);

let maximum = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
        maximum = arr[i];
    }
}
console.log("Largest number:", maximum);

const arr2 = [ 2, 3, 7, 8, 11, 15, 25];
function binarySearch(arr2, target) {
    let left = 0;
    let right = arr2.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(arr2[mid] === target) {
            return mid;
        } else if (arr2[mid] < target) {
            left = mid + 1;           
        } else {
            right = mid -1;
        }
    }
    return -1;
}
console.log(`Index of 7:`, binarySearch(arr2, 7));
console.log(`Index of 8:`, binarySearch(arr2, 8));
console.log(`Index of 11:`, binarySearch(arr2, 11));
console.log(`Index of 25:`, binarySearch(arr2, 25));
console.log(`Index of 5:`, binarySearch(arr2, 5));