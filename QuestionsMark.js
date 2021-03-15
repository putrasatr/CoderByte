function QuestionsMarks(str) {

    // code goes here  
    let isTrue = false
    const notLetter = str.match(/[^a-z A-Z]/g)
    let Num = 0
    let Qmark = ''
    notLetter == null ? false : notLetter.map((a,b) => {
        if (Number(a)) Num += Number(a)
        if (a == '?' && Num != 0) Qmark += a
        if (Num === 10 && Qmark.length == 3) Num = 0, isTrue = true, Qmark = ''
        if (Num === 10 && Qmark.length !== 3) Num = 0, isTrue = false, Qmark = ''
    })

    return isTrue;

}
console.log(QuestionsMarks("aa6??4hja?4?1")) // return false
console.log(QuestionsMarks("acc?7??sss?3rr??????51")) // return true
console.log(QuestionsMarks("Argument goes here")) // return false