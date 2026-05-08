// Find occurrences in an array

const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

function countOccurrences(arr, key) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            count++;
        }
    }

    return count;
}

console.log(`Occurrences of ${k}:`, countOccurrences(nums, k));
