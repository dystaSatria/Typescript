function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays while both have elements
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const unsortedArray: number[] = [34, 7, 23, 32, 5, 62];
const sortedArray: number[] = mergeSort(unsortedArray);

console.log('Unsorted array:', unsortedArray);
console.log('Sorted array:', sortedArray);
