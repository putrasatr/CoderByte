function Longestword(str){
const character = str.match(/[A-Z a-z 0-9]/g)
const array = character.join('').split(' ')

const result = array.sort((a,b)=>b.length - a.length)
return result[0]
}
console.log(Longestword('Birds fly in The sky'))
console.log(Longestword('!@#not$ fo#$231und'))