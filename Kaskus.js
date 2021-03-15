function deretKaskus(n) {
    var arr = []
    for (i = 1; i <= n; i++) {
        var hasil = i * 3
        if (hasil % 5 === 0 && hasil % 6 === 0) arr.push('KASKUS')
        if (hasil % 5 === 0) arr.push('KAS')
        if (hasil % 6 === 0) arr.push('KUS')
        else arr.push(i * 3)
    }
    return arr
}

console.log(deretKaskus(10))
// console.log(deretKaskus(100))
// console.log(deretKaskus(1))