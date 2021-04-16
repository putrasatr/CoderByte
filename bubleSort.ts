let unsortedArr = [4, 6, 1, 2, 3, 5]
let unsortedArr2 = [82, 3, 13, 4, 55, 24, 0, 345, 4, 6, 1, 2, 3, 5, -1, -22]
let bubbleSort = (arr) => {
    arr.map(() => {
        for (let i = arr.length; i >= 0; i--) {
            let j = i - 1;
           if(arr[i] < arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    })
    return arr
}

console.log(bubbleSort(unsortedArr)) // return [ 1, 2, 3, 4, 5, 6 ]
console.log(bubbleSort(unsortedArr2)) // return ['-22', '-1', 0, 1, 2, 3, 3, 4, 4, 5, 6, 13, 24, 55, 82, 345]


//-----------Array method sort------------
// unsortedArr2.sort((a, b) => a - b);
// unsortedArr.sort((a, b) => a - b);
// console.log(unsortedArr,unsortedArr2)