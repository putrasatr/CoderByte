function loopWithoutFor(s) {
    let letter = s.match(/[a-z]/g).join('')
    let a = letter.match(/[aiueo]/g).join('')
    let b = letter.match(/[^aiueoAIUEO]/g).join('')
    let i = 0
    // console.log(!a)
    // do {
    //     console.log((a + b)[i])
    //     i++ 
    // } while (i != (a + b).length);
}

loopWithoutFor('[javascriptz ')


function Calculator(n) {
    let d = /(\d)ss/g
    let D = /\D/g

    console.log(Number(n.match(d)))
    console.log(n.split(D)[0])

    // for (let i = 0; i < n.length; i++) {
    //     if(n[i]){}

    // }
    // mh.tambah(3)
    // console.log(mh.tambah(6).bagi(3).x)

    let array = [n[0], n[1], n[2]]
    // let result = n.match(d).join('') + n.match(D).join('')
    // return a
}
Calculator('17+1-2+5')

// console.log()