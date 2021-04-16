<<<<<<< HEAD
function QuestionsMarks(str) {

    // code goes here  
    const notLetter = str.match(/[^a-z A-Z]/g)
    let isTrue = false
    let Num = 0
    let Qmark = ''

    notLetter == null ? false : notLetter.map((a) => {
        if (Num === 10 && Qmark.length < 3) Num = 0, Qmark = ''
        if (Num === 10 && Qmark.length == 3) Num = 0, isTrue = true, Qmark = ''
        if (Number(a)) Num += Number(a)
        if (a == '?' && Num != 0) Qmark += a
    })

    return isTrue;

}
console.log(QuestionsMarks("aa6??4hja?4?1")) // return false
console.log(QuestionsMarks("acc?7??sss?3rr5???5")) // return true
=======
function QuestionsMarks(str) {

    // code goes here  
    const notLetter = str.match(/[^a-z A-Z]/g)
    let isTrue = false
    let Num = 0
    let Qmark = ''

    notLetter == null ? false : notLetter.map((a) => {
        if (Num === 10 && Qmark.length < 3) Num = 0, Qmark = ''
        if (Num === 10 && Qmark.length == 3) Num = 0, isTrue = true, Qmark = ''
        if (Number(a)) Num += Number(a)
        if (a == '?' && Num != 0) Qmark += a
    })

    return isTrue;

}
console.log(QuestionsMarks("aa6??4hja?4?1")) // return false
console.log(QuestionsMarks("acc?7??sss?3rr5???5")) // return true
>>>>>>> 15056a9125119a20f0aa10d2d7954608a120ba23
console.log(QuestionsMarks("argument goes here")) // return false