let unsortedArr = [4,6,1,2,3,5]
let unsortedArr2 = [82,3,13,4,55,24,345]


let bubbleSort = (inputArr) => {
    inputArr.map(()=>{
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
            }
        }
    })
    return inputArr;
};

console.log(bubbleSort(unsortedArr)) // return [ 1, 2, 3, 4, 5, 6 ]
console.log(bubbleSort(unsortedArr2)) // return [ 3,  4,  13, 24, 55, 82, 345 ]
