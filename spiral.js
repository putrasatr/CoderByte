function spiral(param) {
    let store = []
    let arr = new Array()
    let numMax = param * param
    let j = 0
    for (let i = 0; i < numMax; i++) {
        const isZero = i % param === 0
        if (isZero) {
            arr[i / param] = [i]
            j = i / param
        } else
            arr[j].push(i)
    }
    counterRow = param - 1;
    counterCol = 0
    while (counterRow) {
        const right = arr[counterCol]
        store = [...store, ...right]

        for (let i = 1; i < arr.length; i++) {
            const down = arr[i][counterRow]
            store = [...store, down]
        }
        let left = arr[counterRow]
        store = [...store, ...left.reverse()]
        counterRow--
        for (let i = counterRow; i > 0; i--) {
            const up = arr[i][counterCol]
            store = [...store, up]
        }
        counterCol++
    }
    let result = store.concat();
    for (let k = 0; k < result.length; ++k) {
        for (let l = k + 1; l < result.length; ++l) {
            if (result[k] === result[l])
                result.splice(l--, 1);
        }
    }

    console.log(result)
}

spiral(4)
// spiral(5)
// spiral(100)