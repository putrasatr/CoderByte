let unsortedArr = [4, 6, 1, 2, 3, 5]
let unsortedArr2 = [82, 3, 13, 4, 55, 24, 345]
let bubbleSort = (inputArr) => {
    let len = inputArr.length - 1
    inputArr.map(() => {
        for (let i = len; i >= 0; i--) {
            let j = i - 1;
            if (inputArr[i] < inputArr[j]) [inputArr[j], inputArr[i]] = [inputArr[i], inputArr[j]]
        }
    })
    return inputArr
}
console.log(bubbleSort(unsortedArr)) // return [ 1, 2, 3, 4, 5, 6 ]
console.log(bubbleSort(unsortedArr2)) // return [ 3,  4,  13, 24, 55, 82, 345 ]